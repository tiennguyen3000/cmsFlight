import type { NextApiRequest, NextApiResponse } from 'next';
import BargainFinderMaxApi from 'service/bargainFinderMaxApi';
import { BargainFinderMaxResDto } from 'service/flights/BargainFinderMaxResDto';

import { FlightsResDto, Pivot } from 'service/flights/FlightsResDto';
const ignoreList = [
  'departureCountry',
  'arrivalCountry',
  'departureTimeZone',
  'arrivalTimeZone',
  'tpaExtensions',
  'fareReturned',
  'lastTicketDate',
  'lastTicketTime',
  'fareConstruction',
  'equivFare',
  'ptcFareBreakdowns',
  'fareInfos',
  'tpaExtensions',
  'ticketingInfo',
  'tpaExtensions',
  'pricingSource',
  'pricingSubSource',
  'resBookDesigCode',
  'marketingAirline',
  'marriageGrp',
];

export default async function BargainFinderMax2(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const body = req.body;
    const response = await BargainFinderMaxApi.post({ ...body });

    const { error, success, pricedItineraries } = response;
    let result: FlightsResDto;

    // if (success != undefined && error === undefined) {
      const data = bargainFinderMaxIgnore(response, ignoreList);
      const pivot = flightsPivot(response);
      result = { pivot: pivot, data: data };

      return res.status(200).json(result);
    // } else {
      return res.status(500).json({ error: 'Something went wrong' });
    // }
  } catch (error) {
    return res.status(500).json(error);
  }
}

const flightsPivot = (res: BargainFinderMaxResDto) => {
  let result: Pivot;

  const arlineMap = new Map<string, number>();
  const timeFlightList = {
    '06:00': 0,
    '12:00': 0,
    '18:00': 0,
    '24:00': 0,
  };

  const stopQuantities = {
    '0': 0,
    '1': 0,
  };
  try {
    const totalResult = 0;
    res.pricedItineraries.forEach((pricedItinerariesItem) => {
      pricedItinerariesItem.airItinerary.originDestinationOptions.forEach(
        ({ flightSegment }) => {
          //pivot time
          const date = flightSegment[0].departureDateTime;
          const time = parseInt(date.split('T')[1].split(':')[0]);
          if (time >= 6 && time < 12) {
            timeFlightList['06:00'] += 1;
          } else if (time >= 12 && time < 18) {
            timeFlightList['12:00'] += 1;
          } else if (time >= 18 && time < 24) {
            timeFlightList['18:00'] += 1;
          } else if (time >= 24 && time < 6) {
            timeFlightList['24:00'] += 1;
          }
          // pivot airline
          let flightSegmenStopQuantity = 0;

          flightSegment.forEach(({ operatingAirline, stopQuantity }) => {
            const airline = operatingAirline.code;
            if (stopQuantity > 0) {
              flightSegmenStopQuantity = 1;
            }

            if (arlineMap.has(airline)) {
              arlineMap.set(airline, arlineMap.get(airline) + 1);
            } else {
              arlineMap.set(airline, 1);
            }
          });
          //pivot stopQuantity
          if (flightSegmenStopQuantity > 0) {
            stopQuantities[1] = stopQuantities[1] + 1;
          } else {
            stopQuantities[0] = stopQuantities[0] + 1;
          }
        },
      );
    });

    const arlineList = Array.from(arlineMap.keys());
    result = {
      timeFlightList,
      arlineList,
      stopQuantities,
    };
    return result;
  } catch {
    result = { error: 'System error' };
    return result;
  }
};

const bargainFinderMaxIgnore = (
  res: BargainFinderMaxResDto,
  ignoreList: string[],
) => {
  try {
    const { pricedItineraries: resSaki } = res;

    resSaki.forEach((pricedItinerariesItem) => {
      //ignore root 2
      ignoreList.forEach((ignoreItem) => {
        delete pricedItinerariesItem[ignoreItem];
      });
      //ignore root 3
      pricedItinerariesItem.airItinerary.originDestinationOptions.forEach(
        (originDestinationOptionsItem) => {
          ignoreList.forEach((ignoreItem) => {
            delete originDestinationOptionsItem[ignoreItem];
          });
          //ignore root 4
          originDestinationOptionsItem.flightSegment.forEach(
            (flightSegmentItem) => {
              ignoreList.forEach((ignoreItem) => {
                delete flightSegmentItem[ignoreItem];
              });
            },
          );
        },
      );
      //ignore airItineraryPricingInfo property
      ignoreList.forEach((ignoreItem) => {
        delete pricedItinerariesItem.airItineraryPricingInfo[ignoreItem];
      });
      //ignore airItineraryPricingInfo.itinTotalFare property
      ignoreList.forEach((ignoreItem) => {
        delete pricedItinerariesItem.airItineraryPricingInfo.itinTotalFare[
          ignoreItem
        ];
      });
    });
    const result: BargainFinderMaxResDto = {
      pricedItineraries: resSaki,
    };
    return result;
  } catch {
    return res;
  }
};

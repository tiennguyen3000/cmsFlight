import type { NextApiRequest, NextApiResponse } from 'next';
import BargainFinderMaxApi from 'service/bargainFinderMaxApi';

const ignoreList = [
  'departureCountry',
  'arrivalCountry',
  'departureTimeZone',
  'arrivalTimeZone',
  'tpaExtensions',
  'fareReturned',
  'lastTicketDate',
  'lastTicketTime',
  'baseFare',
  'fareConstruction',
  'equivFare',
  'ptcFareBreakdowns',
  'fareInfos',
  'tpaExtensions',
  'ticketingInfo',
  'tpaExtensions',
];

export default async function BargainFinderMax(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const body = req.body;
  console.log(body);
  try {
    const response = await BargainFinderMaxApi.post({ ...body });

    const { error, success, pricedItineraries } = response;
    if (success != undefined && error === undefined) {
      const arlineList = new Map<string, number>();
      const timeFlightList = {
        '06:00': 0,
        '12:00': 0,
        '18:00': 0,
        '24:00': 0,
      };

      const stopQuantityList = {
        '0': 0,
        '1': 0,
      };

      const totalResult = 0;

      res.status(200).json({
        success,
        arlineList,
        timeFlightList,
        stopQuantityList,
        pricedItineraries,
      });
    } else {
      res.status(500).json({ error: 'Something went wrong' });
    }
  } catch {
    res.status(500).json({ error: 'Something went wrong' });
  }
}

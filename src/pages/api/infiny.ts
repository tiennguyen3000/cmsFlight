import type { NextApiRequest, NextApiResponse } from 'next';

import axios from 'axios';
import FlightsApi from 'service/FlightsApi';


const data = {
  version: '123',
  responseType: 'OTA',
  pos: {
    source: {
      pseudoCityCode: '8HP6',
      requestorId: {
        id: 1,
        type: 1,
        companyName: {
          code: 'TN',
        },
      },
    },
  },
  originDestinationInformation: [
    {
      RPH: 0,
      departureDateTime: '2022-07-25T14:00:00',
      originLocation: {
        locationCode: 'SGN',
      },
      destinationLocation: {
        locationCode: 'TYO',
      },
    },
    {
      RPH: 1,
      departureDateTime: '2022-07-30T18:00:00',
      originLocation: {
        locationCode: 'SGN',
      },
      destinationLocation: {
        locationCode: 'TYO',
      },
    },
    {
      RPH: 9,
      departureDateTime: '2022-07-31T18:00:00',
      originLocation: {
        locationCode: 'SGN',
      },
      destinationLocation: {
        locationCode: 'TYO',
      },
    },
  ],
  travelPreferences: {
    maxStopsQuantity: 1,
    validInterlineTicket: true,
    carbinPref: {
      cabin: 'Economy',
    },
    tpaExtensions: {
      onlineIndicator: {
        ind: false,
      },
      longConnectTime: {
        enable: true,
        min: 780,
        max: 1439,
      },
      jumpCabinLogic: {
        disabled: true,
      },
    },
  },
  travelerInfoSummary: {
    seatsRequested: 1,
    airTravelerAvail: {
      passengerTypeQuantity: {
        code: 'ADT',
        quantity: 1,
      },
    },
    priceRequestInformation : {
      negotiatedFaresOnly: false,
      tpaExtensions: {
        priority: {
          price: {
            priority: 1,
          },
          directFlights: {
            priority: 2,
          },
          time: {
            priority: 3,
          },
          vendor: {
            priority: 4,
          },
        },
      },
    },
  },
  tpaExtensions: {
    intelliSellTransaction: {
      requestType: {
        name: '200ITINS',
      },
    },
  },
};

const config = {
  method: 'post',
  url: 'http://35.76.96.230:8080/infini',
  headers: {
    'Content-Type': 'application/json',
  },
  data: data,
};

export default async function handler(req: NextApiRequest, res:NextApiResponse) {

  await FlightsApi.postInfiny(data)
    .then(response => {
      res.status(200).json(response.data);
      console.log(response);
    })
    .catch(err => {
      res.status(500).json(err);
    });
  // axios(config)
  //   .then(function (response) {
      
  //     const data = response.data;
  //     const monifyData =[];
  //     data.OTA_AirLowFareSearchRS.PricedItineraries.PricedItinerary.forEach((pricedItineraryElement) => {
  //       pricedItineraryElement.AirItinerary.OriginDestinationOptions.OriginDestinationOption.forEach((originDestinationOptionElement) => {
  //         originDestinationOptionElement.FlightSegment.forEach((flightSegmentElement) => {
  //           monifyData.push(flightSegmentElement);
  //         });
  //       }
  //       );
  //     });

  //     return res.status(200).json(monifyData);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //     return res.status(500).json(error);
  //   });
  
}

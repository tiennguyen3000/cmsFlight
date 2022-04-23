interface IFlightSegment {
  departureDateTime: string;
  flightNumber: number;
  resBookDesigCode: string;
  arrivalDateTime: string;
  stopQuantity: number;
  elapsedTime: string;
  marketingAirline: {
    code: string;
    flightNumber: string;
    resBookDesigCode: string;
    banner: string;
  };
  marriageGrp: string;
  departureAirport: {
    locationCode: string;
    terminalID: string;
  };
  arrivalAirport: {
    locationCode: string;
    terminalID: string;
  };
  operatingAirline: {
    code: string;
    flightNumber: string;
  };
  equipment: {
    airEquipType: string;
  };
  departureTimeZone: {
    gMTOffset: string;
    gmtoffset: string;
  };
  arrivalTimeZone: {
    gMTOffset: string;
    gmtoffset: string;
  };
  tpaExtensions: {
    mileage: {
      amount: string;
    };
    eticket: {
      ind: string;
    };
  };
}
interface IFlightSegmentNew {
  departureDateTime: string;
  flightNumber: number;
  resBookDesigCode: string;
  arrivalDateTime: string;
  stopQuantity: number;
  elapsedTime: string;
  marketingAirline: {
    code: string;
    flightNumber: string;
    resBookDesigCode: string;
    banner: string;
  };
  departureAirport: {
    locationCode: string;
    terminalID: string;
  };
  arrivalAirport: {
    locationCode: string;
    terminalID: string;
  };
  operatingAirline: {
    code: string;
    flightNumber: string;
  };
  equipment: {
    airEquipType: string;
  };
}
interface IAirItinerary {
  directionInd: string;
  originDestinationOptions: {
    elapsedTime: string;
    departureCountry: string;
    arrivalCountry: string;
    flightSegment: IFlightSegment[];
  };
}
interface IAirItineraryPricingInfo {
  itinTotalFare: {
    totalFare: {
      amount: string;
      currencyCode: string;
      decimalPlaces: string;
    };
    taxes: {
      tax: {
        taxCode: string;
        amount: string;
        currencyCode: string;
        decimalPlaces: string;
      }[];
    };
  };
}

interface IPricedItineraries {
  sequenceNumber: string;
  airItinerary: IAirItinerary[];
  airItineraryPricingInfo: IAirItineraryPricingInfo;
}
[];

export type { IFlightSegment, IPricedItineraries, IFlightSegmentNew };

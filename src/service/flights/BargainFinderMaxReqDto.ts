export interface BargainFinderMaxReqDto {
  originDestinationInformation: OriginDestinationInformation[];
  travelPreferences: TravelPreferences;
  travelerInfoSummary: TravelerInfoSummary[];
}

export interface OriginDestinationInformation {
  RPH: number;
  departureDateTime: Date;
  originLocation: NLocation;
  destinationLocation: NLocation;
}

export interface NLocation {
  locationCode: string;
}

export interface TravelPreferences {
  maxStopsQuantity: number;
  validInterlineTicket: boolean;
  carbinPref: CarbinPref[];
}

export interface CarbinPref {
  cabin: CABIN_CODE;
  preferLevel: string;
}

export interface TravelerInfoSummary {
  travelerInfoSummary: number;
  airTravelerAvail: AirTravelerAvail;
}

export interface AirTravelerAvail {
  passengerTypeQuantity: PassengerTypeQuantity[];
}

export interface PassengerTypeQuantity {
  code: string;
  quantity: number;
}

export enum CABIN_CODE {
  Economy = 'Y',
  PremiumEconomy = 'P',
  Business = 'C',
  First = 'F',
  PremiumBusiness = 'J',
}

export interface BargainFinderMaxResDto {
  error?: object;
  success?: string;
  pricedItineraries: {
    pricedItinerary:PricedItinerary[]};
}

export interface PricedItinerary {
  sequenceNumber: string;
  airItinerary: AirItinerary;
  airItineraryPricingInfo: AirItineraryPricingInfo;
  ticketingInfo: TicketingInfo;
  tpaExtensions: PricedItineraryTpaExtensions;
}

export interface AirItinerary {
  directionInd: DirectionInd;
  originDestinationOptions: OriginDestinationOption[];
}

export enum DirectionInd {
  Return = 'Return',
  OneWay = 'OneWay',
}

export interface OriginDestinationOption {
  elapsedTime: string;
  departureCountry: null;
  arrivalCountry: null;
  flightSegment: FlightSegment[];
}

export interface FlightSegment {
  departureDateTime: string;
  flightNumber: number;
  resBookDesigCode: string;
  arrivalDateTime: string;
  stopQuantity: number;
  elapsedTime: string;
  marketingAirline: MarketingAirline;
  marriageGrp: string;
  departureAirport: Airport;
  arrivalAirport: Airport;
  operatingAirline: OperatingAirline;
  equipment: Equipment;
  departureTimeZone: TimeZone;
  arrivalTimeZone: TimeZone;
  tpaExtensions: FlightSegmentTpaExtensions;
}

export interface Airport {
  locationCode: string;
  terminalID: null | string;
}

export interface TimeZone {
  gMTOffset: string;
  gmtoffset: string;
}

export interface Equipment {
  airEquipType: string;
}

export interface MarketingAirline {
  code: string;
  flightNumber: null;
  resBookDesigCode: null;
  banner: null;
}

export interface OperatingAirline {
  code: string;
  flightNumber: string;
}

export interface FlightSegmentTpaExtensions {
  mileage?: Mileage;
  eticket: Eticket;
}

export interface Eticket {
  ind: string;
}

export interface Mileage {
  amount: string;
}

export interface AirItineraryPricingInfo {
  pricingSource: string;
  pricingSubSource: string;
  fareReturned: string;
  lastTicketDate: string;
  lastTicketTime: string;
  itinTotalFare: ItinTotalFare;
  ptcFareBreakdowns: PtcFareBreakdowns;
  fareInfos: FareInfo[];
  tpaExtensions: AirItineraryPricingInfoTpaExtensions;
}

export interface FareInfo {
  fareReference: null;
  tpaExtensions: null;
}

export interface ItinTotalFare {
  baseFare: BaseFare;
  fareConstruction: BaseFare;
  equivFare: BaseFare;
  taxes: ItinTotalFareTaxes;
  totalFare: BaseFare;
}

export interface BaseFare {
  amount: string;
  currencyCode: string;
  decimalPlaces: string;
  taxCode?: string;
  countryCode?: string | null;
}

export enum TaxCode {
  AX = 'AX',
  C4 = 'C4',
  TOTALTAX = 'TOTALTAX',
  UE = 'UE',
  UE3 = 'UE3',
  YR = 'YR',
  YRI = 'YRI',
}

export interface ItinTotalFareTaxes {
  tax: BaseFare[];
}

export interface PtcFareBreakdowns {
  ptcFareBreakdowns: PtcFareBreakdown[];
}

export interface PtcFareBreakdown {
  passengerTypeQuantity: PassengerTypeQuantity;
  fareBasisCodes: FareBasisCode[];
  passengerFare: PassengerFare;
  endorsements: Endorsements;
  tpaExtensions: PtcFareBreakdownTpaExtensions;
  fareInfos: FareInfo[];
}

export interface Endorsements {
  nonRefundableIndicator: boolean;
}

export interface FareBasisCode {
  bookingCode: string;
  departureAirportCode: string;
  arrivalAirportCode: string;
  fareComponentBeginAirport: string;
  fareComponentEndAirport: string;
  fareComponentDirectionality: string;
  fareComponentVendorCode: string;
  fareComponentFareTypeBitmap: string;
  fareComponentFareType: string;
  fareComponentFareTariff: string;
  fareComponentFareRule: string;
  govCarrier: string;
  availabilityBreak: string;
  value: string;
}

export interface PassengerFare {
  baseFare: Fare;
  fareConstruction: BaseFare;
  equivFare: BaseFare;
  taxes: PassengerFareTaxes;
  totalFare: Fare;
  tpaExtensions: PassengerFareTpaExtensions;
  obfees: null;
}

export interface Fare {
  amount: string;
  currencyCode: string;
}

export interface PassengerFareTaxes {
  tax: BaseFare[];
  taxSummary: BaseFare[];
  totalTax: BaseFare;
}

export interface PassengerFareTpaExtensions {
  baggageInformationList: BaggageInformationList;
}

export interface BaggageInformationList {
  baggageInformation: BaggageInformation;
}

export interface BaggageInformation {
  provisionType: string;
  airlineCode: string;
  segment: Segment[];
  allowance: Allowance;
}

export interface Allowance {
  weight: null;
  unit: null;
  pieces: string;
}

export interface Segment {
  id: string;
}

export interface PassengerTypeQuantity {
  code: string;
  quantity: number;
}

export interface PtcFareBreakdownTpaExtensions {
  fareCalcLine: FareCalcLine;
}

export interface FareCalcLine {
  info: string;
}

export interface AirItineraryPricingInfoTpaExtensions {
  divideInParty: DivideInParty;
  validatingCarrier: ValidatingCarrier;
}

export interface DivideInParty {
  indicator: boolean;
}

export interface ValidatingCarrier {
  settlementMethod: string;
  newVcxProcess: string;
  _default: DefaultClass;
}

export interface DefaultClass {
  code: string;
}

export interface TicketingInfo {
  ticketType: string;
  validInterline: string;
}

export interface PricedItineraryTpaExtensions {
  validatingCarrier: DefaultClass;
}

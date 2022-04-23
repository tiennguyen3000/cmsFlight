import { BargainFinderMaxResDto } from './BargainFinderMaxResDto';

export interface Pivot {
  timeFlightList?: {
    '06:00': number;
    '12:00': number;
    '18:00': number;
    '24:00': number;
  };
  arlineList?: string[];
  stopQuantities?: {
    '0': number;
    '1': number;
  };
  error?: string;
}

export interface FlightsResDto {
  pivot?: Pivot;
  data: BargainFinderMaxResDto;
}

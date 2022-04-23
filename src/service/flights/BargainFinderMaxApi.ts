import AxiosClient from 'lib/AxiosClient';
import { FlightReqDto } from './FlightsReqDto';
import { FlightsResDto } from './FlightsResDto';

const BargainFinderMaxApi = {
  post: (body) => {
    return AxiosClient.post<FlightReqDto, FlightsResDto>(
      '/bargainFinderMax2',
      body,
    );
  },
};

export default BargainFinderMaxApi;

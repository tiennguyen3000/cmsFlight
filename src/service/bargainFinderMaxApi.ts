import AxiosServer from 'lib/AxiosServer';
import { BargainFinderMaxReqDto } from './flights/BargainFinderMaxReqDto';
import { BargainFinderMaxResDto } from './flights/BargainFinderMaxResDto';

const BargainFinderMaxApi = {
  post: (params) => {
    // return AxiosServer.post<FlightReqDto,FlightsResDto>('/bargain-finder-max-rq', params);
    return AxiosServer.post<BargainFinderMaxReqDto, BargainFinderMaxResDto>(
      '/bargain-finder-max-rq',
      params,
    );
  },
};
export default BargainFinderMaxApi;

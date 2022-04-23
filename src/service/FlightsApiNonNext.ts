import AxiosClient from 'lib/AxiosServer';
import { FlightsSeachReqtDTO } from 'views/Flights/model/FlightsSeachReqtDTO';

const flightsApi = {
  getInfiny: (params: FlightsSeachReqtDTO) => {
    return AxiosClient.post<FlightsSeachReqtDTO, FlightsSeachReqtDTO>(
      '/infiny',
      params,
    );
  },
  getOrderByMadh: (madh) => {
    return AxiosClient.get(`/api/orders/${madh}`);
  },
  getOrders: () => {
    return AxiosClient.get('api/orders');
  },
};

export default flightsApi;

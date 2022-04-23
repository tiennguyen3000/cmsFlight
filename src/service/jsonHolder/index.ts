import AxiosClient from 'lib/AxiosServer';
import { FlightsSeachReqtDTO } from 'views/Flights/model/FlightsSeachReqtDTO';

const locationApi = {
  getLocation: () => {
    return AxiosClient.get('/flight-locations?codeFlightOrCityName=H');
  },
  getOrderByMadh: (madh) => {
    return AxiosClient.get(`/api/orders/${madh}`);
  },
  getOrders: () => {
    return AxiosClient.get('api/orders');
  },
};

export default locationApi;

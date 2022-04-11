import AxiosClient from 'lib/AxiosClientNonNext';

const FlightsApi = {
  postInfiny: (param) => {
    return AxiosClient.post('/infini', param);
  },
  getInfiny: () => {
    return AxiosClient.post('/infini');
  },
  getOrderByMadh: (madh) => {
    return AxiosClient.get(`/api/orders/${madh}`);
  },
  getOrders: () => {
    return AxiosClient.get('api/orders');
  },
};
export default FlightsApi;

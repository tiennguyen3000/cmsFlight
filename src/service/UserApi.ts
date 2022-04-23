import AxiosClient from 'lib/AxiosServer';
import { UserRespDTO } from 'views/Flights/model/UserRespDTO';

const UserApi = {
  get: () => {
    return AxiosClient.get<any, UserRespDTO>('/infiny');
  },
};

export default UserApi;

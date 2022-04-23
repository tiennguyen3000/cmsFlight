import { AbstractDataObject, RequestDTO } from 'types/dto';

export class FlightsSeachReqtDTO
  extends AbstractDataObject
  implements RequestDTO
{
  public readonly requestVersion: number;
  public masohopdong: string;
  public constructor() {
    super();
    this.requestVersion = 1;
    this.masohopdong = '';
  }

  public getDataTypeName(): string {
    return 'FlightsSeachReqtDTO';
  }
}

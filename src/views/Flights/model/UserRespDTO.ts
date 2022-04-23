export class UserRespDTO {
  public readonly requestVersion: number;
  public id: string;
  public username: string;
  public email: string;
  public address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  public password: string;
  public phone: string;
  public website: string;
  public company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
  public constructor() {
    this.requestVersion = 1;
    this.id = '';
    this.username = '';
    this.email = '';
    this.address = {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      geo: {
        lat: '',
        lng: '',
      },
    };
    this.password = '';
    this.phone = '';
    this.website = '';
    this.company = {
      name: '',
      catchPhrase: '',
      bs: '',
    };
  }
  getDataTypeName(): string {
    return 'UserRespDTO';
  }
}

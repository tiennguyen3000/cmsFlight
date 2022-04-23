import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  SelectChangeEvent,
  InputLabel,
  Select,
  MenuItem,
  Autocomplete,
} from '@mui/material';
import { LocalizationProvider, DatePicker, LoadingButton } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import PeopleOptions from '../PeopleOptions';
import ClassOptions from '../../resource/ClassOptions';
import AirportLocationData from 'resource/airportLocation.json';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
// import BargainFinderMaxApi from 'service/flights/BargainFinderMaxApi';
import BargainFinderMaxApi from 'service/bargainFinderMaxApi';

import LocationApi from 'service/location';
const validationSchema = yup.object({
  distinationType: yup.string().required('Vui lòng chọn loại điểm đến'),
  departureDate: yup
    .date()
    .required('Vui lòng chọn ngày đi')
    .min(
      new Date().toISOString().slice(0, 10),
      'Ngày đi phải lớn hơn hoặc bằng ngày hiện tại',
    ),
  ticketType: yup.string().required('Vui lòng chọn loại vé'),
  email: yup
    .string()
    .trim()
    .email('Please enter a valid email address')
    .required('Email is required.'),
  password: yup
    .string()
    .required('Please specify your password')
    .min(8, 'The password should have at minimum length of 8'),
});
interface PeopleOptions {
  adults: number;
  children: number;
  infants: number;
}

interface IAirportOption {
  area: string;
  airport: string;
  national: string;
  code: string;
  label: string;
}

class DataValidate {
  public departureDate: boolean;
  public distinationType: boolean;
  public ticketType: boolean;
  public email: boolean;
  public password: boolean;
  public people: boolean;
  public airline: boolean;
  public flightNumber: boolean;
  public returnDate: boolean;

  constructor() {
    this.departureDate = false;
    this.distinationType = false;
    this.ticketType = false;
    this.email = false;
    this.password = false;
    this.people = false;
    this.airline = false;
    this.flightNumber = false;
    this.returnDate = false;
  }
}
const InitAirlineOptions = {
  area: '',
  airport: '',
  national: '',
  code: '',
  label: '',
};

const InitPeopleOptions = {
  adults: 0,
  children: 0,
  infants: 0,
};

class TravelPreferences {
  public maxStopsQuantity: number;
  public validInterlineTicket: boolean;
  public carbinPref: {
    cabin: string;
  };

  constructor(
    maxStopsQuantity: number,
    validInterlineTicket: boolean,
    cabin: string,
  ) {
    this.maxStopsQuantity = maxStopsQuantity;
    this.validInterlineTicket = validInterlineTicket;
    this.carbinPref = { cabin: cabin };
  }

  toString(): string {
    return `${this.maxStopsQuantity} ${this.validInterlineTicket} ${this.carbinPref.cabin}`;
  }

  className(): string {
    return 'TravelPreferences';
  }
}
class OriginDestinationInformationList {
  public RPH: number;
  public departureDateTime: string;
  public originLocation: {
    locationCode: string;
  };
  public destinationLocation: {
    locationCode: string;
  };

  constructor(
    RPH: number,
    departureDateTime: string,
    originLocation: string,
    destinationLocation: string,
  ) {
    this.RPH = RPH;
    this.departureDateTime = departureDateTime;
    this.originLocation = { locationCode: originLocation };
    this.destinationLocation = { locationCode: destinationLocation };
  }
}
class PassengerTypeQuantityList {
  code: string;
  quantity: number;
  constructor(code: string, quantity: number) {
    this.code = code;
    this.quantity = quantity;
  }
}
interface AirTravelerAvailList{
  passengerTypeQuantity: PassengerTypeQuantityList[];
}
class TravelerInfoSummaryList {
  public travelerInfoSummary: number;
  public airTravelerAvail: AirTravelerAvailList[];

  constructor(
    travelerInfoSummary: number,
    airTravelerAvailList: AirTravelerAvailList[],
  ) {
    this.travelerInfoSummary = travelerInfoSummary;
    this.airTravelerAvail=airTravelerAvailList;
  }
}

class BargainFinderMaxRs {
  public originDestinationInformation: OriginDestinationInformationList[];
  public travelPreferences: TravelPreferences;
  public travelerInfoSummary: TravelerInfoSummaryList;

  constructor(
    originDestinationInformation: OriginDestinationInformationList[],
    travelPreferences: TravelPreferences,
    travelerInfoSummary: TravelerInfoSummaryList,
  ) {
    this.originDestinationInformation = originDestinationInformation;
    this.travelPreferences = travelPreferences;
    this.travelerInfoSummary = travelerInfoSummary;
  }
}

class vm {
  public departureDate: Date | null;
  public returnDate: Date | null;
  public departureAirport: IAirportOption;
  public returnAirport: IAirportOption;
  public totalPassenger: number;
  public peopleOptions: PeopleOptions;
  public airlineOptions: IAirportOption[];
}

interface IProps {
  onSubmit: (data: any) => void;
}

const Form = (props: IProps): JSX.Element => {
  const [departureDate, setDepartureDate] = useState<Date | null>(null);
  const [returnDate, setReturnDate] = useState<Date | null>(null);
  const [departureAirport, setDepartureAirport] = useState<IAirportOption>(
    AirportLocationData[0],
  );
  const [returnAirport, setReturnAirport] = useState<IAirportOption>(
    AirportLocationData[0],
  );
  const [departureAirline, setDepartureAirline] = useState<string>('');
  const [returnAirline, setReturnAirline] = useState<string>('');
  const [maxSeat, setMaxSeat] = useState<number>(0);
  const [peopleOptions, setPeopleOptions] =
    useState<PeopleOptions>(InitPeopleOptions);
  const [lang, setLang] = useState<string>('vi');
  const [flightsOption, setFlightsOption] = useState<string>('oneWay');
  const [airportLoacation, setAirportLoacation] = useState<IAirportOption>(
    AirportLocationData[0],
  );
  const [isOneway, setIsOneWay] = useState<boolean>(true);
  const [airLineOption, setAirLineOption] = useState<string>('all');
  const [seatClassOption, setSeatClassOption] = useState<string>('economy');
  const [dataValidate, setDataValidate] = useState<DataValidate>(
    new DataValidate(),
  );
  // const [flightResult, setFlightResult] = useState<any>(null);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  // handle DepartureAirport OnChange
  const handleDepartureAirportOnChange = (
    event: any,
    newValue: IAirportOption,
  ) => {
    setDepartureAirport(newValue);
  };

  // handle DepartureAirport OnChange
  const handleReturnAirportOnChange = (
    event: any,
    newValue: IAirportOption,
  ) => {
    setReturnAirport(newValue);
  };

  // handle Flights Option OnChange
  const handleFlightsOptionOnChange = (event: any, newValue: string) => {
    if (newValue != '') {
      setFlightsOption(newValue);
    }
    if (newValue == 'oneWay') {
      setIsOneWay(true);
      setReturnDate(null);
    } else {
      setIsOneWay(false);
    }
  };

  // handle Departure Data OnChange
  const handleDepartureDateOnChange = (newValue: Date) => {
    setDepartureDate(newValue);
    console.log(`date${newValue}`);
    formik.setFieldValue('departureDate', newValue);
  };

  // handle Return Data OnChange
  const handleReturnDateOnChange = (newValue: Date) => {
    setReturnDate(newValue);
  };

  // handle Airline Options Onchange
  const handleAirlineOnChange = (event: SelectChangeEvent) => {
    setAirLineOption(event.target.value);
  };

  // handle SeatClass Onchange
  const handleSeatClassOnChange = (event: SelectChangeEvent) => {
    setSeatClassOption(event.target.value);
  };

  const peopleOptionsChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
    name: string,
  ) => {
    let maxValue: number;
    const newValue = Number(event.target.value);

    if (name === 'adults' && Number(event.target.value) < 1) {
      return;
    }
    if (name === 'adults') {
      maxValue =
        newValue +
        Number(peopleOptions.children) +
        Number(peopleOptions.infants);
    } else if (name === 'children') {
      maxValue =
        newValue + Number(peopleOptions.adults) + Number(peopleOptions.infants);
    } else if (name === 'infants') {
      maxValue =
        newValue +
        Number(peopleOptions.adults) +
        Number(peopleOptions.children);
    }

    if (maxValue <= 9) {
      setPeopleOptions((prevState) => ({
        ...prevState,
        [name]: newValue,
      }));
    }
  };

  const initialValues = {
    email: '',
    password: '',
    departureDate: new Date().toISOString().slice(0, 10),
  };

  const onSubmit = (values) => {
    console.log(values);
    return values;
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit,
  });
  //handle submit
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event);
  };
  //handle Flight Seach Submit
  const handleFlightSearchSubmit = async () => {
    setIsSearching(true);
    // Validate Data
    const dataValidate: DataValidate = new DataValidate();

    if (departureAirport.code == returnAirport.code) {
      dataValidate.airline = true;
    }
    if (departureDate == null) {
      dataValidate.departureDate = true;
    }

    if (!isOneway && returnDate == null) {
      dataValidate.returnDate = true;
    }

    if (!isOneway && returnDate != null && returnDate < departureDate) {
      dataValidate.returnDate = true;
    }

    if (
      dataValidate.airline ||
      dataValidate.departureDate ||
      dataValidate.returnDate ||
      dataValidate.returnDate
    ) {
      alert('Please check your data ' + JSON.stringify(dataValidate));
      return;
    } else {
      const originDestinationInformation: OriginDestinationInformationList[] =
        [];
      let travelPreferences: TravelPreferences;
      let travelerInfoSummaryList: TravelerInfoSummaryList;
      let bargainFinderMaxRs: BargainFinderMaxRs;
      const passengerTypeQuantityList: PassengerTypeQuantityList[] = [];
      let totalPassenger = 0;

      // reset flight result
      props.onSubmit(null);
      // setFlightResult(null);
      // Create OriginDestinationInformationList

      originDestinationInformation.push(
        new OriginDestinationInformationList(
          1,
          departureDate.toISOString().split('.')[0],
          departureAirport.code,
          returnAirport.code,
        ),
      );
      if (!isOneway) {
        originDestinationInformation.push(
          new OriginDestinationInformationList(
            2,
            returnDate.toISOString().split('.')[0],
            returnAirport.code,
            departureAirport.code,
          ),
        );
      }

      //travelPreferences
      travelPreferences = new TravelPreferences(1, true, seatClassOption);

      // create passengerTypeQuantityList
      if (peopleOptions.adults > 0) {
        passengerTypeQuantityList.push(
          new PassengerTypeQuantityList('ADT', peopleOptions.adults),
        );
      }
      if (peopleOptions.children > 0) {
        passengerTypeQuantityList.push(
          new PassengerTypeQuantityList('CHD', peopleOptions.children),
        );
      }
      if (peopleOptions.infants > 0) {
        passengerTypeQuantityList.push(
          new PassengerTypeQuantityList('INF', peopleOptions.infants),
        );
      }

      if (passengerTypeQuantityList.length <= 0) {
        return;
      }
      totalPassenger =
        peopleOptions.adults + peopleOptions.children + peopleOptions.infants;

      //travelerInfoSummary
      // travelerInfoSummaryList = [];
      let airTravelerAvailList: AirTravelerAvailList[] = [];
      airTravelerAvailList.push({passengerTypeQuantity:passengerTypeQuantityList});
      travelerInfoSummaryList = new TravelerInfoSummaryList(
        totalPassenger,
        airTravelerAvailList,
      );

      bargainFinderMaxRs = new BargainFinderMaxRs(
        originDestinationInformation,
        travelPreferences,
        travelerInfoSummaryList,
      );

      try {
        console.log(JSON.stringify(bargainFinderMaxRs));
        const rq = await BargainFinderMaxApi.post(bargainFinderMaxRs);
        console.log(rq);
        props.onSubmit(rq);
        // setFlightResult(rq);
      } catch (error) {
        console.log(error);
      } finally {
        setIsSearching(false);
      }
      const resetValidate = new DataValidate();

      setDataValidate((prevState) => {
        return {
          ...prevState,
          ...resetValidate,
        };
      });
    }
  };
  useEffect(() => {
    const searchLocation = async () => {
      try {
        const param = { codeFlightOrCityName: 'HAN' };
        const res = await LocationApi.getLocation(param);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    searchLocation();
  }, []);

  return (
    <Box>
      {/* <form onSubmit={handleFlightSearchSubmit}> */}
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}>
          <RadioGroup
            row
            aria-labelledby="departure-loca-radio-buttons-group-label"
            name="row-radio-buttons-group"
            onChange={handleFlightsOptionOnChange}
            value={flightsOption}
          >
            <FormControlLabel
              value="oneWay"
              control={<Radio />}
              label="Một chiều"
            />
            <FormControlLabel
              value="return"
              control={<Radio />}
              label="Khứ hồi"
            />
            <FormControlLabel
              value="multi"
              disabled
              control={<Radio />}
              label="Nhiều chặng"
            />
          </RadioGroup>
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
            Nhập vào nơi đi
          </Typography> */}
          <Autocomplete
            defaultValue=""
            fullWidth
            // id="asynchronous-demo"
            value={departureAirport}
            onChange={handleDepartureAirportOnChange}
            isOptionEqualToValue={(option, value) => option.code === value.code}
            getOptionLabel={(option) => option.label}
            groupBy={(option) => option.national}
            options={AirportLocationData}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Điểm đi"
                required
                InputProps={{
                  ...params.InputProps,
                  startAdornment: <FlightTakeoffIcon />,
                  endAdornment: (
                    <React.Fragment>
                      {params.InputProps.endAdornment}
                    </React.Fragment>
                  ),
                }}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
            Nhập vào nơi đến
          </Typography> */}
          <Autocomplete
            defaultValue=""
            fullWidth
            // id="asynchronous-demo"
            value={returnAirport}
            onChange={handleReturnAirportOnChange}
            isOptionEqualToValue={(option, value) => option.code === value.code}
            getOptionLabel={(option) => option.label}
            groupBy={(option) => option.national}
            options={AirportLocationData}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Điểm đến"
                required
                error={dataValidate.departureDate}
                InputProps={{
                  ...params.InputProps,
                  startAdornment: <FlightLandIcon />,
                  endAdornment: (
                    <React.Fragment>
                      {params.InputProps.endAdornment}
                    </React.Fragment>
                  ),
                }}
              />
            )}
          />
        </Grid>
        {/* <Grid item xs={12} sm={6}>
            <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
              Nhập vào nơi đến
            </Typography>
            <AirportLocation
              label="Nơi đến"
              onChange={(newValue) => setDestination(newValue)}
              value={'HAN'}
              takeoff={false}
            />
          </Grid> */}
        {/* <Grid item xs={12} sm={6}> */}

        <Grid item xs={6} sm={3}>
          {/* <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
            Chọn ngày đi
          </Typography> */}
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Ngày đi"
              value={departureDate}
              inputFormat="dd/MM/yyyy"
              // format="EE-dd/MM/yyyy"
              onChange={handleDepartureDateOnChange}
              renderInput={(params) => (
                <TextField
                  {...params}
                  sx={{ width: '100%' }}
                  required
                  error={dataValidate.departureDate}
                />
              )}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={6} sm={3}>
          {/* <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
            Chọn ngày về
          </Typography> */}

          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Ngày về"
              value={returnDate}
              inputFormat="dd/MM/yyyy"
              // format="EE-dd/MM/yyyy"
              onChange={handleReturnDateOnChange}
              renderInput={(params) => (
                <TextField
                  {...params}
                  sx={{ width: '100%' }}
                  required={!isOneway}
                />
              )}
              disabled={isOneway}
            />
          </LocalizationProvider>
        </Grid>

        <Grid item xs={6} sm={3}>
          {/* <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
            Chọn hãng hàng không
          </Typography> */}
          <FormControl variant="outlined" sx={{ minWidth: 1 }}>
            <InputLabel id="career-listing__jobs-role--label">
              Hãng bay
            </InputLabel>
            <Select
              labelId="career-listing__jobs-role--label"
              label="Locations"
              onChange={handleAirlineOnChange}
              value={airLineOption}
            >
              {/* <MenuItem value="">
                <em>Tất cả</em>
              </MenuItem> */}
              <MenuItem value="all">Bất kỳ</MenuItem>
              <MenuItem value={'VN'}>Việt Nam Airline</MenuItem>
              <MenuItem value={'VJ'}>Japan Airline</MenuItem>
              <MenuItem value={'AN'}>All Nippon Airline</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6} sm={3}>
          {/* <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
            Chọn hạng ghế
          </Typography> */}
          <FormControl variant="outlined" sx={{ minWidth: 1 }}>
            <InputLabel id="career-listing__jobs-role--label">
              Hạng ghế
            </InputLabel>

            <Select
              labelId="career-listing__jobs-role--label"
              label="Locations"
              onChange={handleSeatClassOnChange}
              value={seatClassOption}
            >
              {/* <MenuItem value="">
                <em>Hạng ghế</em>
              </MenuItem> */}
              {ClassOptions[lang].map(({ id, name }) => (
                <MenuItem key={id} value={id}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        {/* <Grid item xs={12} sm={12}>
          <Typography variant={'subtitle2'}>Hành khách</Typography>
        </Grid> */}
        <Grid item xs={6} sm={2}>
          <PeopleOptions
            onChange={(event) => peopleOptionsChangeHandler(event, 'adults')}
            maxValue={9}
            label={'Người lớn *'}
            value={peopleOptions.adults}
            fontSize={'large'}
          />
        </Grid>
        <Grid item xs={6} sm={2}>
          <PeopleOptions
            onChange={(event) => peopleOptionsChangeHandler(event, 'children')}
            maxValue={9}
            label={'Trẻ em'}
            value={peopleOptions.children}
            fontSize={'medium'}
          />
        </Grid>
        <Grid item xs={6} sm={2}>
          <PeopleOptions
            onChange={(event) => peopleOptionsChangeHandler(event, 'infants')}
            maxValue={9}
            label={'Trẻ sơ sinh'}
            fontSize={'small'}
            value={peopleOptions.infants}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <LoadingButton
            size={'large'}
            variant={'contained'}
            type={'button'}
            onClick={handleFlightSearchSubmit}
            sx={{ height: 54, whiteSpace: 'nowrap', minWidth: '100%' }}
            loading={isSearching}
            loadingIndicator="Đang tìm kiếm..."
          >
            Tìm kiếm chuyến bay
          </LoadingButton>
        </Grid>
      </Grid>
      {/* </form> */}
    </Box>
  );
};

export default Form;
function setDestination(newValue: any): void {
  throw new Error('Function not implemented.');
}

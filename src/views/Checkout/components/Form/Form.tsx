/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  SelectChangeEvent,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import AirportLocation from '../AirportLocation';
import { LocalizationProvider, DatePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import AirlineOptions from '../AirlineOptions';
import PeopleOptions from '../PeopleOptions';
import ClassOptions from '../../resource/ClassOptions';

const validationSchema = yup.object({
  distinationType: yup.string().required('Vui lòng chọn loại điểm đến'),
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

const Form = (): JSX.Element => {
  const [departureDate, setDepartureDate] = useState<Date | null>(null);
  const [returnDate, setReturnDate] = useState<Date | null>(null);
  const [departureAirport, setDepartureAirport] = useState<string>('');
  const [returnAirport, setReturnAirport] = useState<string>('');
  const [departureAirline, setDepartureAirline] = useState<string>('');
  const [returnAirline, setReturnAirline] = useState<string>('');
  const [maxSeat, setMaxSeat] = useState<number>(0);
  const [peopleOptions, setPeopleOptions] = useState<PeopleOptions>({
    adults: 0,
    children: 0,
    infants: 0,
  });
  const [lang, setLang] = useState<string>('vi');

  const peopleOptionsChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
    name: string,
  ) => {
    setPeopleOptions((prevState) => ({
      ...prevState,
      [name]: Number(event.target.value),
    }));
    console.log(event);
  };

  const initialValues = {
    email: '',
    password: '',
  };

  const onSubmit = (values) => {
    return values;
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit,
  });

  return (
    <Box>
      <form onSubmit={formik.handleSubmit}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12}>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Khứ hồi"
              />
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="Một chiều"
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Nhiều chặng"
              />
            </RadioGroup>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
              Nhập vào nơi đi
            </Typography>
            <AirportLocation
              label="Nơi đi"
              onChange={(newValue) => setDestination(newValue)}
              value={'HAN'}
              takeoff={true}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
              Nhập vào nơi đến
            </Typography>
            <AirportLocation
              label="Nơi đến"
              onChange={(newValue) => setDestination(newValue)}
              value={'HAN'}
              takeoff={false}
            />
          </Grid>
          {/* <Grid item xs={12} sm={6}> */}

          <Grid item xs={6} sm={3}>
            <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
              Chọn ngày đi
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Ngày đi"
                value={departureDate}
                inputFormat="dd/MM/yyyy"
                // format="EE-dd/MM/yyyy"
                onChange={(newValue) => {
                  setDepartureDate(newValue);
                }}
                renderInput={(params) => (
                  <TextField {...params} sx={{ width: '100%' }} />
                )}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
              Chọn ngày về
            </Typography>

            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Ngày về"
                value={departureDate}
                inputFormat="dd/MM/yyyy"
                // format="EE-dd/MM/yyyy"
                onChange={(newValue) => {
                  setDepartureDate(newValue);
                }}
                renderInput={(params) => (
                  <TextField {...params} sx={{ width: '100%' }} />
                )}
              />
            </LocalizationProvider>
          </Grid>

          <Grid item xs={6} sm={3}>
            <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
              Chọn hãng hàng không
            </Typography>
            <FormControl variant="outlined" sx={{ minWidth: 1 }}>
              <InputLabel id="career-listing__jobs-role--label">
                Hãng bay
              </InputLabel>
              <Select
                labelId="career-listing__jobs-role--label"
                label="Locations"
              >
                <MenuItem value="">
                  <em>All locations</em>
                </MenuItem>
                <MenuItem value={'milan'}>Milan</MenuItem>
                <MenuItem value={'yerevan'}>Yerevan</MenuItem>
                <MenuItem value={'paris'}>Paris</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
              Chọn hạng ghế
            </Typography>
            <FormControl variant="outlined" sx={{ minWidth: 1 }}>
              <InputLabel id="career-listing__jobs-role--label">
                Hạng ghế
              </InputLabel>

              <Select
                labelId="career-listing__jobs-role--label"
                label="Locations"
              >
                <MenuItem value="">
                  <em>Hạng ghế</em>
                </MenuItem>
                {ClassOptions[lang].map(({ id, name }) => (
                  <MenuItem key={id} value={id}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Typography variant={'subtitle2'}>Hành khách</Typography>
          </Grid>
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
              onChange={(event) =>
                peopleOptionsChangeHandler(event, 'children')
              }
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
            <Button
              size={'large'}
              variant={'contained'}
              type={'submit'}
              sx={{ height: 54, whiteSpace: 'nowrap', minWidth: '100%' }}
            >
              Tìm kiếm chuyến bay
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default Form;
function setDestination(newValue: any): void {
  throw new Error('Function not implemented.');
}

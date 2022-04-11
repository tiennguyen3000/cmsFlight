/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from '@mui/material';
import AirportLocation from '../AirportLocation';
import { Grid } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import DeleteIcon from '@mui/icons-material/Delete';
import flightsApi from 'service/FlightsApi';

type FlightsInfor ={
  originDestinationInformation:{
    RPH: number,
    originLocation: {
      locationCode: string,
    },
    destinationLocation: {
      locationCode: string,
    },
    departureDateTime: string,
  }[],
  travelerInfoSummary:{
    seatsRequested: number,
    airTravelerAvail:{
      passengerTypeQuantity:{
        code: string,
        quantity: number,
      }
    }
  }
}[];

const flightRequest = {
  version: '123',
  responseType: 'OTA',
  pos: {
    source: {
      pseudoCityCode: '8HP6',
      requestorId: {
        id: 1,
        type: 1,
        companyName: {
          code: 'TN',
        },
      },
    },
  },
  originDestinationInformation: [
    {
      RPH: 0,
      departureDateTime: '2022-07-25T14:00:00',
      originLocation: {
        locationCode: 'SGN',
      },
      destinationLocation: {
        locationCode: 'TYO',
      },
    },
    {
      RPH: 1,
      departureDateTime: '2022-07-30T18:00:00',
      originLocation: {
        locationCode: 'SGN',
      },
      destinationLocation: {
        locationCode: 'TYO',
      },
    },
    {
      RPH: 9,
      departureDateTime: '2022-07-31T18:00:00',
      originLocation: {
        locationCode: 'SGN',
      },
      destinationLocation: {
        locationCode: 'TYO',
      },
    },
  ],
  travelPreferences: {
    maxStopsQuantity: 1,
    validInterlineTicket: true,
    carbinPref: {
      cabin: 'Economy',
    },
    tpaExtensions: {
      onlineIndicator: {
        ind: false,
      },
      longConnectTime: {
        enable: true,
        min: 780,
        max: 1439,
      },
      jumpCabinLogic: {
        disabled: true,
      },
    },
  },
  travelerInfoSummary: {
    seatsRequested: 1,
    airTravelerAvail: {
      passengerTypeQuantity: {
        code: 'ADT',
        quantity: 1,
      },
    },
    priceRequestInformation: {
      negotiatedFaresOnly: false,
      tpaExtensions: {
        priority: {
          price: {
            priority: 1,
          },
          directFlights: {
            priority: 2,
          },
          time: {
            priority: 3,
          },
          vendor: {
            priority: 4,
          },
        },
      },
    },
  },
  tpaExtensions: {
    intelliSellTransaction: {
      requestType: {
        name: '200ITINS',
      },
    },
  },
};

const DestinationFinderItem = (): JSX.Element => {
  const theme = useTheme();
  const [flightsInfor, setFlightsInfor] = useState<FlightsInfor>([]);  
  const [value, setValue] = useState<Date | null>(null);
  const [origin, setOrigin] = useState<any | null>(null);
  const [destination, setDestination] = useState<any | null>(null);
  const [departureDate, setDepartureDate] = useState<Date | null>(null);
  const [returnDate, setReturnDate] = useState<Date | null>(null);
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  // Gọi API tìm kiếm chuyến bay
  const findFlightsHandler = () => {
    console.log('Flight Clicked');
    if (!isLoading){
      setData(null);
      setIsLoading(true);   
      // flightsApi.getInfiny().then((res) => {
      //   console.log(res);
      //   setData(res);
      //   setIsLoading(false);
      // })
      // .catch((err) => {
      //   console.log(err);
      //   setIsLoading(false);
      // });
      flightsApi.getInfiny().then((res) => {
        console.log(res);
        setData(res);
        setIsLoading(false);
      })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    
    }    
    return;
  };

  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setIsLoading(true);
  };

  const handleClose = () => {
    setIsLoading(false);
  };

  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Grid container spacing={1}>
        <Grid
          item
          alignItems={'flex-start'}
          justifyContent={'center'}
          xs={12}
          md={3}
          marginBottom={2}
        >
          <AirportLocation
            label="Bay từ"
            onChange={(newValue) => setOrigin(newValue)}
            value={origin}
          />
        </Grid>
        <Grid
          item
          alignItems={'flex-start'}
          justifyContent={'center'}
          xs={12}
          md={3}
          marginBottom={2}
        >
          <AirportLocation
            label="đến"
            onChange={(newValue) => setDestination(newValue)}
            value={destination}
          />
        </Grid>
        <Grid
          item
          alignItems={'flex-start'}
          justifyContent={'center'}
          xs={12}
          md={2}
          marginBottom={2}
        >
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Ngày đi"
              value={departureDate}
              inputFormat="dd/MM/yyyy"
              format="EE-dd/MM/yyyy"
              onChange={(newValue) => {
                setDepartureDate(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>
        <Grid
          item
          alignItems={'flex-start'}
          justifyContent={'center'}
          xs={12}
          md={2}
          marginBottom={2}
        >
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Ngày về"
              value={returnDate}
              inputFormat="dd/MM/yyyy"
              format="dd/mm/yyyy"
              onChange={(newValue) => {
                setReturnDate(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>
        <Grid
          item
          alignItems={'flex-start'}
          justifyContent={'center'}
          xs={12}
          md={2}
          marginBottom={2}
        >
          <div>
            <Button
              size="large"
              variant="outlined"
              onClick={() => findFlightsHandler()}
              disabled={isLoading}
            >
              Tìm kiếm
            </Button>
          </div>
        </Grid>
      </Grid>

      {/* <Dialog
        // fullScreen={fullScreen}
        fullScreen
        open={isLoading}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Thông báo"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Hệ thống đang tìm kiếm dữ liệu
          </DialogContentText>
        </DialogContent>
      </Dialog> */}
      {isLoading && (
        <Box sx={{ minwidth: 300 }}>
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
        </Box>
      )}
      {data && (
        <TableContainer component={Paper} sx={{maxWidth:650}}>
          <Table sx={{ minWidth: 320, maxWidth:650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">Nơi đến</TableCell>
                <TableCell align="right">Nơi đi</TableCell>
                <TableCell align="right">Hãng hàng không</TableCell>
                <TableCell align="right">Loại máy bay</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data &&
                data.map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="right">
                      {row.DepartureAirport.LocationCode}
                    </TableCell>
                    <TableCell align="right">
                      {row.ArrivalAirport.LocationCode}
                    </TableCell>
                    <TableCell align="right">
                      {row.MarketingAirline.Code}
                    </TableCell>
                    <TableCell align="right">
                      {row.Equipment.AirEquipType}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default DestinationFinderItem;

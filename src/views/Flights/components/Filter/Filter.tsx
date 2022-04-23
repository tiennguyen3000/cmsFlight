/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Slider,
  Checkbox,
  FormGroup,
  Stack,
  Card,
  Tab,
  Tabs,
} from '@mui/material';


import UserApi from 'service/UserApi';
import { UserRespDTO } from 'views/Flights/model/UserRespDTO';

const TimeSeries = [
  { time: '06:00', timeRange: '00:00 - 05:59' },
  { time: '12:00', timeRange: '06:00 - 11:59' },
  { time: '18:00', timeRange: '12:00 - 17:59' },
  { time: '24:00', timeRange: '18:00 - 23:59' },
];
const AirlineList = [
  { id: 1, name: 'Air Asia', selected: false },
  { id: 2, name: 'Air India', selected: false },
  { id: 3, name: 'Air Asia', selected: false },
  { id: 4, name: 'Air New Zealand', selected: false },
  { id: 5, name: 'Air Canada', selected: false },
  { id: 6, name: 'Vietnam Airlines', selected: false },
  { id: 7, name: 'Air France', selected: false },
  { id: 8, name: 'Qatar Airways', selected: false },
];
const Filter = (): JSX.Element => {
  const theme = useTheme();
  const [airlineList, setAirlineList] =
    useState<typeof AirlineList>(AirlineList);
  const [airlineAnchorList, setAirlineAnchorList] =
    useState<typeof AirlineList>(AirlineList);

  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const [value, setValue] = React.useState('female');
  const [timeLine, setTimeLine] = React.useState<number | number[]>(0);
  const [user, setUser] = useState<UserRespDTO>(new UserRespDTO());
  const [timeRangeChecked, setTimeRangeChecked] = useState({
    '00:06': false,
    '12:00': false,
    '18:00': false,
    '24:00': false,
  });

  console.log(`helo${airlineAnchorList}`);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  function valuetext(value: number) {
    return `${value}°C`;
  }
  const marks = [
    {
      value: 0,
      label: '0h',
    },
    {
      value: 20,
      label: '20h',
    },
    {
      value: 37,
      label: '37h',
    },
    {
      value: 100,
      label: '100h',
    },
  ];

  useEffect(() => {
    const fetchUserList = async () => {
      try {
        const resp = await UserApi.get();
        setUser(resp);
        console.log('Fetch user list success', resp);
      } catch (e) {}
    };
    fetchUserList();
  }, []);
  const [flightFiltelTab, setFlightFilterTab] = useState<number>(0);

  const handleFlightFilterTabChange = (
    event: React.ChangeEvent<{}>,
    newValue: number,
  ) => {
    setFlightFilterTab(newValue);
  };
  const tabStyles = {
    textDecoration: 'none',
    transition: 'all .2s ease-in-out',
    '&:hover': {
      transform: `translateY(-${theme.spacing(1 / 2)})`,
    },
  } as const;

  return (
    <Box component={Card} p={2} width={1}>
      <Typography variant={'h5'} gutterBottom sx={{ fontWeight: 600 }}>
        Bộ lọc
      </Typography>
      <Typography variant={'subtitle2'} component={'p'} gutterBottom>
        Hiển thị 196 kết quả
      </Typography>
      <Typography
        variant={'subtitle1'}
        component={'p'}
        sx={{ fontWeight: 600 }}
        gutterBottom
      >
        Điểm dừng
      </Typography>

      <FormControl fullWidth>
        {/* <FormLabel id="demo-controlled-radio-buttons-group">
          Điểm dừng
        </FormLabel> */}

        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <Box
            display={'flex'}
            flexDirection={{ xs: 'row', sm: 'row' }}
            flex={'1 1 100%'}
            justifyContent={{ sm: 'space-between' }}
            alignItems={{ sm: 'center' }}
          >
            <FormControlLabel
              value="normal"
              control={<Radio />}
              label="Bất kỳ"
            />
            <Typography
              variant={'subtitle2'}
              component={'p'}
              // color={'text.secondary'}
            >
              124 kết quả
            </Typography>
          </Box>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            // spacing={2}
            width={1}
          >
            <FormControlLabel
              value="normal"
              control={<Radio />}
              label="Bất kỳ"
            />
            <Typography
              variant={'subtitle2'}
              component={'p'}
              // color={'text.secondary'}
            >
              124 kết quả
            </Typography>
          </Stack>

          <Typography variant={'subtitle2'} component={'p'}>
            Từ JPY52,562.00
          </Typography>
          <Box sx={{ width: '100%' }}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              width={'100%'}
            >
              <FormControlLabel
                value="onlyone"
                control={<Radio />}
                label="1 điểm dừng"
              />
              <Typography
                variant={'subtitle2'}
                component={'p'}
                // color={'text.secondary'}
              >
                124 kết quả
              </Typography>
            </Stack>
          </Box>
          <Typography variant={'subtitle2'} component={'p'}>
            Từ JPY52,562.00
          </Typography>
        </RadioGroup>
        <Typography
          variant={'subtitle1'}
          component={'p'}
          sx={{ fontWeight: 600 }}
          gutterBottom
        >
          Thời gian hành trình
        </Typography>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          width={1}
        >
          <Typography
            variant={'subtitle1'}
            component={'p'}
            color={'text.primary'}
          >
            Thời gian tối đa
          </Typography>
          <Typography
            variant={'subtitle2'}
            component={'p'}
            color={'text.primary'}
          >
            {timeLine}h
          </Typography>
        </Stack>
        <Box p={1}>
          <Slider
            defaultValue={0}
            getAriaValueText={valuetext}
            min={0}
            max={110}
            aria-label="Default"
            marks={marks}
            valueLabelDisplay="auto"
            onChange={(event, value) => {
              console.log(value);

              setTimeLine(value);
            }}
          />
        </Box>

        <Box width={1}>
          <Tabs
            value={flightFiltelTab}
            onChange={handleFlightFilterTabChange}
            variant="fullWidth"
            aria-label="fillter tabs with best price"
            selectionFollowsFocus
          >
            <Tab label="Bay đi" sx={tabStyles} />
            <Tab label="Bay về" sx={tabStyles} />
          </Tabs>
        </Box>
        <FormGroup>
          {TimeSeries.map((item, index) => {
            return (
              <Box
                display={'flex'}
                flexDirection={{ xs: 'row', sm: 'row' }}
                flex={'1 1 100%'}
                justifyContent={{ sm: 'space-between' }}
                alignItems={{ sm: 'center' }}
                key={`airline-tab-${index}`}
              >
                <FormControlLabel
                  name={item.time}
                  key={`airline-form${index}`}
                  control={
                    <Checkbox
                      checked={timeRangeChecked[item.time]}
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>,
                      ) => {
                        setTimeRangeChecked((preState) => {
                          return {
                            ...preState,
                            [event.target.name]: event.target.checked,
                          };
                        });
                      }}
                      inputProps={{ 'aria-label': 'controlled' }}
                    />
                  }
                  label={item.timeRange}
                />
              </Box>
            );
          })}
        </FormGroup>
      </FormControl>
      <Typography
        variant={'subtitle1'}
        component={'p'}
        sx={{ fontWeight: 600 }}
        gutterBottom
      >
        Hãng bay
      </Typography>
      <FormGroup>
        {airlineList.map((item, index) => {
          return (
            <Box
              display={'flex'}
              flexDirection={{ xs: 'row', sm: 'row' }}
              flex={'1 1 100%'}
              justifyContent={{ sm: 'space-between' }}
              alignItems={{ sm: 'center' }}
              key={`arline-form-box${index}`}
              width={1}
              onMouseOver={() => {
                alert(item.name);
              }}
            >
              <FormControlLabel
                name={item.name}
                key={`arline-form-label${index}`}
                control={
                  <Checkbox
                    key={`arline-form-checkbox-${index}`}
                    checked={item.selected}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      setAirlineList((preState) => {
                        const newState = preState.filter((airline) => {
                          return airline.name !== item.name;
                        });
                        const newItem = {
                          id: item.id,
                          name: item.name,
                          selected: event.target.checked,
                        };
                        return {
                          ...newState,
                          newItem,
                        };
                      });
                    }}
                    inputProps={{ 'aria-label': 'controlled' }}
                  />
                }
                // inputProps={{ 'aria-label': `airline ${index}controlled` }} />}
                label={item.name}
                onMouseEnter={() => {
                  console.log('onMouseEnter');
                }}
                onMouseLeave={() => {
                  console.log('onMouseLeave');
                }}
              />
              {/* <Box component="button" sx={{ display: {  xs:'none'} }} /> */}
              {item.selected && <Box component="button" />}
            </Box>
          );
        })}
      </FormGroup>
    </Box>
  );
};

export default Filter;

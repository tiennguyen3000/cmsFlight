/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Slider,
  Checkbox,
  FormGroup,
} from '@mui/material';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import {
  Timeline,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineConnector,
  TimelineDot,
  TimelineContent,
} from '@mui/lab';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import type { IFlightSegment } from 'views/Flights/model/FlightsRouteDetailModel';

import UserApi from 'service/UserApi';
import { UserRespDTO } from 'views/Flights/model/UserRespDTO';

const FlightsRouteDetail = (): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const [value, setValue] = React.useState('female');
  const [timeLine, setTimeLine] = React.useState<number | number[]>(0);
  const [user, setUser] = useState<UserRespDTO>(new UserRespDTO());

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
  }, []);
  return (
    <Box>
      <Box>
        <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 200 }}>
          Chuyến bay đến thành phố Hồ Chí Minh của bạn
        </Typography>
        <Typography
          variant={'h6'}
          component={'p'}
          color={'text.secondary'}
          gutterBottom
        >
          Chuyến bay đến thành phố Hồ Chí Minh của bạn
        </Typography>
        <Timeline
          sx={{
            '& .MuiTimelineContent-root': {
              flex: 0.2,
            },
          }}
          position="right"
        >
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align="right"
              variant="body2"
              color="text.secondary"
            >
              Thứ 7 ngày 30 tháng 4 - 9:30 am
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <FlightTakeoffIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                Nagoya
              </Typography>
              <Typography>Sân bay quốc tế Chubu</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              variant="body2"
              align="right"
              color="text.secondary"
            >
              Thứ 7 ngày 30 tháng 4 - 13:30 pm
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <FlightLandIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                Thành phố Hồ Chí Minh
              </Typography>
              <Typography>Sân bay quốc tế Tân Sơn Nhất</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              variant="body2"
              align="right"
              color="text.secondary"
            >
              Thứ 7 ngày 30 tháng 4 - 13:30 pm
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary" variant="outlined">
                <HotelIcon />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                Sleep
              </Typography>
              <Typography>Because you need rest</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
              <TimelineDot color="secondary">
                <RepeatIcon />
              </TimelineDot>
              {/* <TimelineConnector /> */}
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                Repeat
              </Typography>
              <Typography>Because this is the life you love!</Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
        <Timeline
          sx={{
            '& .MuiTimelineContent-root': {
              flex: 0.2,
            },
          }}
          position="right"
        >
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              09:30 am
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Eat</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              10:00 am
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Code</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              12:00 am
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Sleep</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              9:00 am
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Repeat</TimelineContent>
          </TimelineItem>
        </Timeline>
        {/* Template */}
        <Timeline position="right">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <FlightTakeoffIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="subtitle2" component="span">
                Thứ 7 ngày 30 tháng 4 - 13:30 pm
              </Typography>
              <Typography>Because you need rest</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <FlightTakeoffIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="subtitle2" component="span">
                Thứ 7 ngày 30 tháng 4 - 13:30 pm
              </Typography>
              <Typography>Because you need rest</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <FlightTakeoffIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="subtitle2" component="span">
                Thứ 7 ngày 30 tháng 4 - 13:30 pm
              </Typography>
              <Typography>Because you need rest</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>
              {' '}
              <Typography variant="subtitle2" component="span">
                Thứ 7 ngày 30 tháng 4 - 13:30 pm
              </Typography>
              <Typography>Because you need rest</Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
        <Typography variant={'h6'} component={'p'} color={'text.secondary'}>
          {'1 điểm dừng: 9h 35 phút'}
        </Typography>
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">
            Điểm dừng
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value="normal"
              control={<Radio />}
              label="Bất kỳ"
            />
            <Typography
              variant={'subtitle1'}
              component={'p'}
              color={'text.secondary'}
            >
              124 kết quả
            </Typography>
            <Typography
              variant={'subtitle1'}
              component={'p'}
              color={'text.secondary'}
            >
              Từ JPY52,562.00
            </Typography>
            <FormControlLabel
              value="onlyOne"
              control={<Radio />}
              label="1 điểm dừng"
            />
          </RadioGroup>
          <Typography
            variant={'subtitle1'}
            component={'p'}
            color={'text.secondary'}
          >
            Từ JPY52,562.00
          </Typography>
          <Typography variant={'h6'} component={'p'} color={'text.secondary'}>
            Thời gian
          </Typography>
          <Typography
            variant={'subtitle1'}
            component={'p'}
            color={'text.primary'}
          >
            Thời gian tối đa của hành trình
          </Typography>
          <Typography
            variant={'subtitle1'}
            component={'p'}
            color={'text.primary'}
          >
            {timeLine}h
          </Typography>
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
          <Typography
            variant={'subtitle1'}
            component={'p'}
            color={'text.secondary'}
          >
            Giờ bay
          </Typography>
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>

          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Label"
            />
            <FormControlLabel control={<Checkbox />} label="Disabled" />
          </FormGroup>
        </FormControl>
      </Box>

      <Grid
        item
        container
        justifyContent="center"
        alignItems="center"
        xs={12}
        md={6}
      >
        <Box maxWidth={500} width={1}>
          <Box
            component={'img'}
            src={
              'https://assets.maccarianagency.com/svg/illustrations/drawkit-illustration3.svg'
            }
            width={1}
            height={1}
            sx={{
              filter:
                theme.palette.mode === 'dark' ? 'brightness(0.8)' : 'none',
            }}
          />
        </Box>
      </Grid>
    </Box>
  );
};

export default FlightsRouteDetail;

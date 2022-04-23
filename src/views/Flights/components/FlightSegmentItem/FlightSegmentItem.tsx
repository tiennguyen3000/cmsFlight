import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Divider, Grid, useTheme } from '@mui/material';
import { FlightSegment } from 'service/flights/BargainFinderMaxResDto';

import AirportLocationResource from 'resource/airportLocation.json';

interface FlightSegmentItemProps {
  data: FlightSegment;
}
function hourminute(d: string) {
  const date = new Date(d);
  const h = date.getHours();
  const m = date.getMinutes();
  let mDisplay: string;
  let hDisplay: string;
  if (m === 0) {
    mDisplay = '00';
  } else if (m < 10) {
    mDisplay = '0' + m;
  } else {
    mDisplay = m.toString();
  }
  if (h === 0) {
    hDisplay = '00';
  }
  hDisplay = h.toString();
  return hDisplay + ':' + mDisplay;
}
function minuteToHm(d) {
  d = Number(d);
  const h = Math.floor(d / 60);
  const m = Math.floor(d % 60);

  const hDisplay = h > 0 ? h + ' giờ ' : '';
  const mDisplay = m > 0 ? m + ' phút ' : '';

  return hDisplay + mDisplay;
}

function monthDay(datestr: string) {
  const date = new Date(datestr);
  const m = date.getMonth() + 1;
  const d = date.getDate();

  return d + ' tháng ' + m;
}

function isBaythang(d: number) {
  if (d === 0) {
    return 'Bay thẳng';
  }
  return d + ' điểm dừng';
}
function getLocation(locationCode: string) {
  const detailLocation = AirportLocationResource.find(
    (item) => item.code === locationCode,
  );
  if (detailLocation) {
    return detailLocation.label;
  }
  return locationCode;
}
const FlightSegmentItem = ({ data }: FlightSegmentItemProps): JSX.Element => {
  const theme = useTheme();
  return (
    <Box>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={4}>
          <Box display="flex" flexDirection={'column'} alignItems={'flex-end'}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {hourminute(data.departureDateTime)}
            </Typography>
            <Typography variant="subtitle2">
              {getLocation(data.departureAirport.locationCode)}
            </Typography>
            <Typography variant="subtitle2">
              {monthDay(data.departureDateTime)}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box display="flex" flexDirection={'column'} padding={2}>
            <Box
              display={'flex'}
              justifyContent={'space-between'}
              alignItems={'center'}
            >
              <Typography
                flexGrow={1}
                textAlign="center"
                variant="subtitle2"
                sx={{ fontWeight: 600 }}
              >
                {minuteToHm(data.elapsedTime)}
              </Typography>
            </Box>
            <Box>
              <Divider />
            </Box>
            <Box
              display={'flex'}
              justifyContent={'space-between'}
              alignItems={'center'}
            >
              <Typography
                flexGrow={1}
                textAlign="center"
                variant="subtitle2"
                sx={{ fontWeight: 600 }}
              >
                {isBaythang(data.stopQuantity)}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            {hourminute(data.arrivalDateTime)}
          </Typography>
          <Typography variant="subtitle2">
            {getLocation(data.arrivalAirport.locationCode)}
          </Typography>
          <Typography variant="subtitle2">
            {monthDay(data.arrivalDateTime)}
          </Typography>

          {/* <Box>
              <Box
                component="img"
                height={'50px'}
                width={'100px'}
                src={'/Vietnam_Airlines-Logo.wine.svg'}
                alt="/Vietnam_Airlines-Logo.wine.svg"
                sx={{
                  filter:
                    theme.palette.mode === 'dark'
                      ? 'brightness(0) invert(0.7)'
                      : 'none',
                }}
              />
              <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                Điều hành bởi Việt Nam AirLine
              </Typography>
            </Box> */}
        </Grid>

        <Grid item xs>
          <Box
            display="flex"
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <Typography variant="subtitle2">
              {/* {`Vận hành bởi ${data.operatingAirline.code}`} */}
              {'Vận hành bởi'}
            </Typography>
            <Box
              component="img"
              height={'50px'}
              width={'100px'}
              src={`/airline/${data.operatingAirline.code}.svg`}
              alt="/Vietnam_Airlines-Logo.wine.svg"
              sx={{
                filter:
                  theme.palette.mode === 'dark'
                    ? 'brightness(0) invert(0.7)'
                    : 'none',
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FlightSegmentItem;

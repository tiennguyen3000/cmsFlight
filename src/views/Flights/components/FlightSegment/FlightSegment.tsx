import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Button, Divider, Grid, Stack, useTheme } from '@mui/material';
import FlightSegmentItem from '../FlightSegmentItem';
import { PricedItinerary } from 'service/flights/BargainFinderMaxResDto';
import numeral from 'numeral';

interface FlightSegmentProps {
  data: PricedItinerary;
}
function minuteToHm(d) {
  d = Number(d);
  const h = Math.floor(d / 60);
  const m = Math.floor(d % 60);

  const hDisplay = h > 0 ? h + ' giờ ' : '';
  const mDisplay = m > 0 ? m + ' phút ' : '';

  return hDisplay + mDisplay;
}

export default function FlightSegment({ data }: FlightSegmentProps) {
  const isData = data ? true : false;

  const { airItinerary, airItineraryPricingInfo } = data;
  const { originDestinationOptions } = airItinerary;
  console.log(originDestinationOptions.length);
  return (
    <Box component={Paper} marginTop={5}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          {originDestinationOptions.map((originDestinationOption, index) => (
            <Box margin={1}>
              <Typography variant="subtitle2">
                {`Tổng thời gian: ${minuteToHm(
                  originDestinationOption.elapsedTime,
                )} `}
              </Typography>
              {originDestinationOption.flightSegment.map((item, index) => (
                <FlightSegmentItem data={item} />
              ))}
            </Box>
          ))}
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item xs={12} md={3}>
          <Box
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'space-between'}
            alignItems={'center'}
            height={'100%'}
          >
            <Typography variant="h4" sx={{ fontWeight: 600 }}>
              {`${numeral(
                airItineraryPricingInfo.itinTotalFare.totalFare.amount,
              ).format('0,0')} ${
                airItineraryPricingInfo.itinTotalFare.totalFare.currencyCode
              }`}
            </Typography>
            {/* <IconButton /> */}
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="stretch"
              spacing={2}
              sx={{ m: 1 }}
            >
              <Button variant="outlined" color="primary" size="large" fullWidth>
                Thông tin chi tiết
              </Button>
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{ width: '100%' }}
              >
                Đặt vé
              </Button>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import {
  Tabs,
  Tab,
  Card,
} from '@mui/material';
import FlightSegment from '../FlightSegment';
import Filter from '../Filter';
import { BargainFinderMaxResDto } from 'service/flights/BargainFinderMaxResDto';
type FlightsRouteDetailProps ={
  data:BargainFinderMaxResDto;
} ;

const FlightsResult = (props: FlightsRouteDetailProps): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const [value, setValue] = React.useState('female');
  const [timeLine, setTimeLine] = React.useState<number | number[]>(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

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
  if (!props?.data) {
    return null
  }
  return (
    <Box mt={-8}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Filter />
        </Grid>
        <Grid item xs={12} md={9}>
          <Box component={Card}>
            <Tabs
              value={flightFiltelTab}
              onChange={handleFlightFilterTabChange}
              variant="fullWidth"
              aria-label="fillter tabs with best price"
              selectionFollowsFocus
            >
              <Tab label="Tốt nhất *" sx={tabStyles} />
              <Tab label="Rẻ nhất" sx={tabStyles} />
              <Tab label="Nhanh nhất" sx={tabStyles} />
            </Tabs>
          </Box>
          {props.data.pricedItineraries && 
            props.data.pricedItineraries.pricedItinerary.length > 0 &&
            props.data.pricedItineraries.pricedItinerary.map((item, index) => (
              <Box key={index}>
                <Grid item xs={12} marginTop={2}>
                  <FlightSegment data={item} />
                </Grid>
              </Box>
            ))}
        </Grid>
      </Grid>

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

export default FlightsResult;

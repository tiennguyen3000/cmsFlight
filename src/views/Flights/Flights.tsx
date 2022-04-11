import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  AboutTop,
  Advantages,
  Customers,
  Features,
  Hero,
  Jobs,
  Newsletter,
  Partners,
  Process,
  PromoNumbers,
  Questions,
  TrustedCompanies,
  Destination,
  TicketOptions,
  PeopleOptions,
  DestinationFinderList,
  AirportLocation,
  FlightsResultFilter,
} from './components';
import { Grid, FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent } from '@mui/material';

const JobListing = (): JSX.Element => {
  const [ticketOptions, setTicketOptions] = React.useState<string>('Y');

  const ticketOptionOnClick = (newValue: string) => {
    setTicketOptions(newValue);
  };
  return (
    <Main>
      <Box>
        <Grid container spacing={1}>
          <Grid
            item
            alignItems={'flex-start'}
            justifyContent={'center'}
            xs={12}
            md={4}
            marginBottom={2}
          >
            <Destination />
          </Grid>
          <Grid item xs={12} md={4} marginBottom={2}>
            <TicketOptions
              id="ticket-option"
              value={ticketOptions}
              ticketOptionOnClick={ticketOptionOnClick}
            />
          </Grid>
        
          <Grid item xs={12} md={4} marginBottom={2}>
            <PeopleOptions />
          </Grid>
        </Grid>
        <Container>
          <DestinationFinderList />
        </Container>
        {/* <Container>
          <AirportLocation label="Bay từ" onChange={} />
        </Container> */}
        <Box bgcolor={'alternate.main'}>
          <Container>
            <Questions />
          </Container>
        </Box>
        <Container>
          <FlightsResultFilter />
        </Container>
      </Box>

      <Box bgcolor={'alternate.main'}>
        <Container>
          <AboutTop />
        </Container>
      </Box>
      <Container>
        <Jobs />
      </Container>
      <Box bgcolor={'alternate.main'}>
        <Container>
          <PromoNumbers />
        </Container>
      </Box>
      <Container>
        <Features />
      </Container>
      <Box bgcolor={'alternate.main'}>
        <Container>
          <Advantages />
        </Container>
      </Box>
      <Container>
        <TrustedCompanies />
      </Container>
      <Container paddingY={0}>
        <Divider />
      </Container>
      <Container>
        <Customers />
      </Container>
      <Container paddingTop={'0 !important'}>
        <Newsletter />
      </Container>
    </Main>
  );
};

export default JobListing;

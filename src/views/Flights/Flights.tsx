import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  AboutTop,
  Advantages,
  Customers,
  Features,
  Jobs,
  Newsletter,
  PromoNumbers,
  TrustedCompanies,
  FlightsResult,
  Form,
} from './components';
import FlightsRouteDetail from './components/FlightsRouteDetail';
import { FlightsResDto } from 'service/flights/FlightsResDto';
import { BargainFinderMaxResDto } from 'service/flights/BargainFinderMaxResDto';

const Flights = (): JSX.Element => {
  const [ticketOptions, setTicketOptions] = useState<string>('Y');
  const [flightResult, setFlightResult] = useState<BargainFinderMaxResDto>(null);
  const ticketOptionOnClick = (newValue: string) => {
    setTicketOptions(newValue);
  };

  //handle Form OnSubmit
  const handleFormSubmit = (data: BargainFinderMaxResDto) => {
    setFlightResult(data);
    console.log("data"+ JSON.stringify(data));
  };
  return (
    <Main>
      <Box marginTop={-5} marginBottom={-5}>
        <Container>
          <Form onSubmit={handleFormSubmit} />
        </Container>
      </Box>
      <Box bgcolor={'alternate.main'}>
        <Container>
          <FlightsResult data={flightResult} />
        </Container>
      </Box>
    </Main>
  );
};

export default Flights;

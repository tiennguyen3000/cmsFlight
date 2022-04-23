import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import useTrans from '../../../../pages/hooks/useTrans';
import { useRouter } from 'next/router';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Container from '@mui/material/Container';
import Form from '../Form';
import Button from '@mui/material/Button';
const mockData = [
  {
    id: 1,
    step: 0,
    type: 'Hai chiều (đi và về)',
    guestNumber: 1,
    startDate: 'T7, 30 Thang 4',
    arriveDate: 'T7, 7 Tháng 5',
    localFlight: 'Nagoya',
    arriveLocal: 'Ho Chi Minh City',
    prices: 'JPY146405',
    ads: 'Tiet kiem 10% cho nghi ngoi',
  },
];

const screen = [
  'Screen006',
  'Screen007',
  'Screen008',
  'Screen009',
  'Screen010',
];

const Main = (): JSX.Element => {
  const theme = useTheme();
  const router = useRouter();
  const { asPath, pathname } = useRouter();
  const trans = useTrans();
  const steps = [
    trans.processBooking.step1,
    trans.processBooking.step2,
    trans.processBooking.step3,
    trans.processBooking.step4,
    trans.processBooking.step5,
  ];
  const [activeStep, setActiveStep] = React.useState(3);
  const handleStep = (step: number) => () => {
    setActiveStep(step);
    router.push(screen[step]);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    router.push('Screen008');
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    router.push('Screen010');
  };
  const handleReset = () => {
    setActiveStep(0);
  };
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      {/* stepper */}
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps: { completed?: boolean } = {};
            const labelProps: {
              optional?: React.ReactNode;
            } = {};
            return (
              <Step key={label} {...stepProps}>
                <StepButton {...labelProps} onClick={handleStep(index)}>
                  {label}
                </StepButton>
              </Step>
            );
          })}
        </Stepper>
      </Box>
      {/* flight info */}
      <Box
        sx={{
          flexGrow: 1,
          width: '100%',
          display: 'grid',
          gridTemplateRows: 'repeat(1, 1fr)',
          marginTop: 5,
          paddingX: 1,
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
        >
          {mockData.map((item) => (
            <Grid key={item.id}>
              <Typography variant="subtitle1" gutterBottom component="div">
                {item.type} · {item.guestNumber} hành khách · {item.startDate} -{' '}
                {item.arriveDate}
              </Typography>
              <Typography
                variant="subtitle1"
                gutterBottom
                component="div"
              ></Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          width: '100%',
          display: 'grid',
          gridTemplateRows: 'repeat(1, 1fr)',
          paddingX: 1,
        }}
      >
        <Box
          sx={{
            width: '100%',
            marginBottom: 4,
          }}
        >
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            {mockData.map((item) => (
              <Grid key={item.id}>
                <Typography fontWeight={700} variant={'h4'} gutterBottom>
                  {item.localFlight}
                  {item.id == 1 ? <SwapHorizIcon /> : <ArrowRightAltIcon />}
                  {item.arriveLocal}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        item
        xs={12}
        md={12}
      >
        <Box>
          <Container>
            {/* form guest info */}
            <Form />
          </Container>
        </Box>
      </Grid>

      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
};

export default Main;

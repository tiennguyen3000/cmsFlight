import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import useTrans from '../../../../pages/hooks/useTrans';
import { useRouter } from 'next/router';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Link from '@mui/material/Link';
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
  const [activeStep, setActiveStep] = React.useState(4);
  const handleStep = (step: number) => () => {
    setActiveStep(step);
    router.push(screen[step]);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    router.push('Screen009');
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    handleReset();
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

      <Grid container spacing={isMd ? 4 : 2}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          item
          xs={12}
          md={8}
        >
          <Box>
            <Container>
              {/* form guest info */}
              <Form />
            </Container>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid container spacing={isMd ? 4 : 2}>
            <Grid item xs={12} data-aos="fade-up">
              <Box sx={{ width: '100%' }}>
                {/* row 1 */}
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    item
                    xs={6}
                  >
                    <Typography
                      variant="subtitle1"
                      fontWeight={700}
                      gutterBottom
                      component="div"
                    >
                      Vé 1 người lớn
                    </Typography>
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="flex-start"
                    item
                    xs={6}
                  >
                    <Typography
                      variant="subtitle1"
                      fontWeight={700}
                      gutterBottom
                      component="div"
                    >
                      JPY169,510
                    </Typography>
                  </Grid>
                </Grid>
                {/* Row 2 */}
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    item
                    xs={6}
                  >
                    <Typography
                      variant="subtitle1"
                      fontWeight={500}
                      gutterBottom
                      component="div"
                    >
                      Giá vé máy bay
                    </Typography>
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="flex-start"
                    item
                    xs={6}
                  >
                    <Typography
                      variant="subtitle1"
                      fontWeight={500}
                      gutterBottom
                      component="div"
                    >
                      JPY129,895
                    </Typography>
                  </Grid>
                </Grid>
                {/* Row 3 */}
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    item
                    xs={6}
                  >
                    <Typography
                      variant="subtitle1"
                      fontWeight={500}
                      gutterBottom
                      component="div"
                    >
                      Thuế và phí
                    </Typography>
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="flex-start"
                    item
                    xs={6}
                  >
                    <Typography
                      variant="subtitle1"
                      fontWeight={500}
                      gutterBottom
                      component="div"
                    >
                      JPY16,510
                    </Typography>
                  </Grid>
                </Grid>
                {/* Row 4 */}
                <Grid
                  container
                  marginTop={2}
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    item
                    xs={6}
                  >
                    <Typography
                      variant="h6"
                      fontWeight={700}
                      gutterBottom
                      component="div"
                    >
                      Tổng cộng
                    </Typography>
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="flex-start"
                    item
                    xs={6}
                  >
                    <Typography
                      variant="h6"
                      fontWeight={700}
                      gutterBottom
                      component="div"
                    >
                      JPY169,510
                    </Typography>
                  </Grid>
                </Grid>
                {/* Row 5*/}
                <Grid
                  container
                  marginTop={-2}
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    item
                    xs={12}
                  >
                    <Typography
                      variant="subtitle1"
                      gutterBottom
                      component="div"
                    >
                      Bao gồm thuế và phí
                    </Typography>
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    item
                    xs={12}
                  >
                    <Link href="#" underline="hover">
                      {'Xem chi tiết giá'}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12} data-aos="fade-up">
              <Box component={Card}>
                <CardContent>
                  <Typography
                    color="#b23c17"
                    variant="subtitle1"
                    gutterBottom
                    component="div"
                  >
                    Gửi phản hồi
                  </Typography>
                  <Typography variant="subtitle1" component={'p'}>
                    We believe lorem ipsum dolor sit amet, consectetur
                    adipiscing
                  </Typography>
                </CardContent>
              </Box>
            </Grid>
            <Grid item xs={12} data-aos="fade-up">
              <Box component={Card}>
                <CardContent>
                  <Typography
                    color="#b23c17"
                    variant="subtitle1"
                    gutterBottom
                    component="div"
                  >
                    Gửi phản hồi
                  </Typography>
                  <Typography variant="subtitle1" component={'p'}>
                    We believe lorem ipsum dolor sit amet, consectetur
                    adipiscing
                  </Typography>
                </CardContent>
              </Box>
            </Grid>
          </Grid>
        </Grid>
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

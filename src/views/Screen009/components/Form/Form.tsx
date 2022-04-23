/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from '@mui/material/Link';
const mockData = [
  {
    id: 1,
    step: 0,
    type: 'Hai chiều (đi và về)',
    guestNumber: 2,
    startDate: 'T7, 30 Thang 4',
    arriveDate: 'T7, 7 Tháng 5',
    localFlight: 'Nagoya',
    arriveLocal: 'Ho Chi Minh City',
    prices: 'JPY146405',
    ads: 'Tiet kiem 10% cho nghi ngoi',
  },
];

const Form = (): JSX.Element => {
  return (
    <Box
      component={Grid}
      marginBottom={{ xs: 10, sm: 0 }}
      container
      spacing={4}
    >
      <Grid item xs={12} sm={12}>
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <Typography variant={'h5'} fontWeight={700} sx={{ marginBottom: 2 }}>
            Chọn ghế
          </Typography>
        </List>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Grid item xs={12} sm={12}>
              <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <Typography
                  variant={'subtitle1'}
                  fontWeight={700}
                  sx={{ marginBottom: 0.5 }}
                >
                  Hồ Chí Minh City - Nagoya
                </Typography>
                <Typography variant={'subtitle2'} sx={{ marginBottom: 0.5 }}>
                  6h00' Japan Airline
                </Typography>
                <Typography variant={'subtitle2'} sx={{ marginBottom: 0.5 }}>
                  Chưa chọn ghế
                </Typography>
              </List>
            </Grid>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Grid item xs={12} sm={12}>
              <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <Typography
                  variant={'subtitle1'}
                  fontWeight={700}
                  sx={{ marginBottom: 0.5 }}
                >
                  Hồ Chí Minh City - Nagoya
                </Typography>
                <Typography variant={'subtitle2'} sx={{ marginBottom: 0.5 }}>
                  6h00' Japan Airline
                </Typography>
                <Typography variant={'subtitle2'} sx={{ marginBottom: 0.5 }}>
                  Chưa chọn ghế
                </Typography>
              </List>
            </Grid>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
      >
        <Grid item xs={4}>
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
                  JPY169,895
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
                  JPY166,510
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
                <Typography variant="subtitle1" gutterBottom component="div">
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
      </Grid>
    </Box>
  );
};

export default Form;

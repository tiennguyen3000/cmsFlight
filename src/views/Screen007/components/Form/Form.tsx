/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { makeStyles } from '@material-ui/styles';
import Divider from '@mui/material/Divider';
const useStyles = makeStyles(() => ({
  formControlLabel: { fontSize: '13px', '& label': { fontSize: '0.6rem' } },
}));

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
const validationSchema = yup.object({
  firstName: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid name')
    .max(50, 'Please enter a valid name')
    .required('Please specify your first name'),
  lastName: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid name')
    .max(50, 'Please enter a valid name')
    .required('Please specify your last name'),
  email: yup
    .string()
    .trim()
    .email('Please enter a valid email address')
    .required('Email is required.'),
  phone: yup
    .string()
    .trim()
    .matches(
      /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)$/,
      'Please enter a valid phone number.',
    ),
  gender: yup.string().required('Please specify your project gender'),
  message: yup
    .string()
    .trim()
    .max(500, 'The message cannot contain more than 500 characters'),
});

const Form = (): JSX.Element => {
  const classes = useStyles();
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    budget: '',
    message: '',
  };

  const onSubmit = (values) => {
    return values;
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit,
  });

  return (
    <Box
      sx={{
        width: '100%',
        display: 'grid',
        marginTop: 2,
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        <Box
          component={Grid}
          marginBottom={{ xs: 10, sm: 0 }}
          container
          spacing={4}
        >
          <Grid
            item
            container
            xs={12}
            justifyContent={'start'}
            alignItems={'start'}
            flexDirection={'column'}
          >
            <Typography
              variant={'h6'}
              sx={{ marginTop: 2 }}
              fontWeight={700}
              align={'center'}
            >
              Thông tin liên lạc
            </Typography>
          </Grid>

          {/* email */}
          <Grid item xs={12} sm={6}>
            <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
              Email liên lạc *
            </Typography>
            <TextField
              label="Email"
              variant="outlined"
              name={'email'}
              fullWidth
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
          {/* Phone */}
          <Grid item xs={12} sm={6}>
            <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
              Điện thoại liên lạc
            </Typography>
            <TextField
              label="Phone number"
              variant="outlined"
              name={'phone'}
              fullWidth
              value={formik.values.phone}
              onChange={formik.handleChange}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                sx={{
                  color: 'text.primary',
                  fontSize: 34,
                  fontWeight: 'small',
                }}
                label={
                  <Typography className={classes.formControlLabel}>
                    Nhận cập nhật SMS miễn phí về chuyến bay của bạn
                  </Typography>
                }
              />
            </FormGroup>
          </Grid>
        </Box>
        {/* personal info */}
        {Array.from(Array(3)).map((_, index) => (
          <Box
            key={index}
            component={Grid}
            marginBottom={{ xs: 10, sm: 0 }}
            container
            marginTop={2}
            spacing={4}
          >
            <Grid item xs={12}>
              <Divider />
              <Typography
                variant={'h6'}
                sx={{ marginTop: 2 }}
                fontWeight={700}
                align={'start'}
              >
                Người lớn {index + 1}
              </Typography>
            </Grid>
            {/* First name */}
            <Grid item xs={12} sm={6}>
              <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
                Tên *
              </Typography>
              <TextField
                label="First name"
                variant="outlined"
                name={'firstName'}
                fullWidth
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
            </Grid>
            {/* Last name */}
            <Grid item xs={12} sm={6}>
              <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
                Họ *
              </Typography>
              <TextField
                label="Last name"
                variant="outlined"
                name={'lastName'}
                fullWidth
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
            </Grid>
            {/* gender */}
            <Grid item xs={12} sm={6}>
              <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
                Giới tính *
              </Typography>
              <TextField
                select
                label="gender"
                variant="outlined"
                name={'male'}
                fullWidth
                value={formik.values.gender}
                onChange={formik.handleChange}
                error={formik.touched.gender && Boolean(formik.errors.gender)}
                helperText={formik.touched.gender && formik.errors.gender}
              >
                {['Male', 'Female'].map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            {/* Birthday */}
            <Grid item xs={12} sm={6}>
              <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
                Ngày tháng năm sinh *
              </Typography>
              <TextField
                id="date"
                label="Birthday"
                type="date"
                defaultValue="2017-05-24"
                sx={{ width: '100%' }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          </Box>
        ))}
        <Grid
          item
          container
          xs={12}
          justifyContent={'center'}
          alignItems={'center'}
          flexDirection={'column'}
          marginTop={4}
        >
          <Button size={'large'} variant={'contained'} type={'submit'}>
            Gửi
          </Button>
        </Grid>
      </form>
    </Box>
  );
};

export default Form;

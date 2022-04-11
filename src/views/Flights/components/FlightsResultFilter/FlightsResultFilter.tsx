/* eslint-disable react/no-unescaped-entities */
import React from 'react';
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

const FlightsResultFilter = (): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const [value, setValue] = React.useState('female');
  const [timeLine, setTimeLine] = React.useState<number | number[]>(0);

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

  return (
    <Box>
      <Box>
        <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 200 }}>
          Bộ lọc
        </Typography>
        <Typography
          variant={'h6'}
          component={'p'}
          color={'text.secondary'}
          gutterBottom
        >
          Hiển thị 196 kết quả
        </Typography>
        <Typography variant={'h6'} component={'p'} color={'text.secondary'}>
          Điểm dừng
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

export default FlightsResultFilter;

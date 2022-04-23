/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import BoyIcon from '@mui/icons-material/Boy';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  InputAdornment,
  SelectChangeEvent,
} from '@mui/material';

const currencies = [
  { value: 0, label: '$' },
  {
    value: 1,
    label: '$',
  },
  {
    value: 2,
    label: '€',
  },
  {
    value: 3,
    label: '฿',
  },
  {
    value: 4,
    label: '¥',
  },
  {
    value: 5,
    label: '¥',
  },
  {
    value: 6,
    label: '¥',
  },
  {
    value: 7,
    label: '¥',
  },
  {
    value: 8,
    label: '¥',
  },
  {
    value: 9,
    label: '¥',
  },
];

interface Props {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  maxValue: number;
  label: string;
  fontSize?: 'inherit' | 'large' | 'medium' | 'small';
  value: number;
}

const PeopleOptions = ({
  maxValue,
  label,
  onChange,
  fontSize = 'large',
  value,
}: Props): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const [currency, setCurrency] = React.useState(1);

  const handleChange = (event: SelectChangeEvent) => {
    setCurrency(Number(event.target.value));
  };

  return (
    <Box
      component="form"
      // sx={{ minWidth: '300px', margin: 'auto' }}
      noValidate
      autoComplete="off"
    >
      {/* <div> */}
      <TextField
        id="outlined-select-currency"
        fullWidth
        select
        label={label}
        value={value}
        name="currency"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          onChange(event);
        }}
        // helperText="Please select your currency"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <BoyIcon fontSize={fontSize} />
            </InputAdornment>
          ),
        }}
      >
        {currencies.map((option) => (
          <MenuItem
            key={option.value}
            value={option.value}
            disabled={option.value > maxValue}
          >
            {option.value}
          </MenuItem>
        ))}
      </TextField>
      {/* </div> */}
    </Box>
  );
};

export default PeopleOptions;

/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';

const Destination = (): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box >
     
      <FormControl fullWidth>
        <FormLabel id="demo-row-radio-buttons-group-label">
            Discover your next dream destination
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel
            value="female"
            control={<Radio />}
            label="Khứ hồi"
          />
          <FormControlLabel
            value="male"
            control={<Radio />}
            label="Một chiều"
          />
          <FormControlLabel
            value="other"
            control={<Radio />}
            label="Nhiều chặng"
          />
        </RadioGroup>
      </FormControl>
     
    </Box>
  );
};

export default Destination;

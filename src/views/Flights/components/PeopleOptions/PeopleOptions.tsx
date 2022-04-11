/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const PeopleOptions = (): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Box sx={{ minWidth: 120 }}>
        <FormControl sx={{ minWidth: 100 }}>
          <InputLabel id="demo-simple-select-label">Người lớn</InputLabel>
          <Select
            labelId="adult-select-label"
            id="adult-select"
            // value={age}
            label="Người lớn"
            // onChange={handleChange}
            // autoWidth
            defaultValue={1}
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={7}>7</MenuItem>
            <MenuItem value={8}>8</MenuItem>
            <MenuItem value={9}>9</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ minWidth: 100, ml:1 }} >
          <InputLabel id="childern-select-label">Trẻ em</InputLabel>
          <Select
            labelId="childern-select-label"
            id="childern-select"
            // value={age}
            label="Trẻ em"
            // onChange={handleChange}
            // autoWidth
            defaultValue={0}
          >
            <MenuItem value={0}>0</MenuItem>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={7}>7</MenuItem>
            <MenuItem value={8}>8</MenuItem>
            <MenuItem value={9}>9</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ minWidth: 100, ml:1 }} >
          <InputLabel id="childern-select-label">Trẻ sơ sinh</InputLabel>
          <Select
            labelId="childern-select-label"
            id="childern-select"
            // value={age}
            label="Trẻ sơ sinh"
            defaultValue={0}
            // onChange={handleChange}
            // autoWidth
          >
            <MenuItem value={0}>0</MenuItem>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={7}>7</MenuItem>
            <MenuItem value={8}>8</MenuItem>
            <MenuItem value={9}>9</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default PeopleOptions;

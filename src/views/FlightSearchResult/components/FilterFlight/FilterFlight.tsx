import * as React from 'react';
import FilterDetail from '../FilterDetail';
import Box from '@mui/material/Box';

export default function FilterFlight() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {Array.from(Array(6)).map((_, index) => (
        <FilterDetail />
      ))}
    </Box>
  );
}

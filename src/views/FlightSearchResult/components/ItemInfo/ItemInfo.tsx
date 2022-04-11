/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import GridTemplateRows from '../GridTemplateRows';

const ItemInfo = (): JSX.Element => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(6, 1fr)',
        gap: 1,
        gridTemplateRows: 'auto',
        gridTemplateAreas: ` "main main main main main sidebar"`,
      }}
    >
      <Box sx={{ gridArea: 'main', bgcolor: 'secondary.main' }}>
        <GridTemplateRows />
      </Box>
      <Box sx={{ gridArea: 'sidebar', bgcolor: 'error.main' }}>Sidebar</Box>
    </Box>
  );
};

export default ItemInfo;

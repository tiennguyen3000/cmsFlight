import * as React from 'react';
import Box, { BoxProps } from '@mui/material/Box';
import List from '@mui/material/List';
const itemData = [
  {
    type: 'One-way',
    data: [
      {
        logo: 'https://content.r9cdn.net/rimg/provider-logos/airlines/v/VJ.png?crop=false&width=108&height=92&fallback=default2.png&_v=e91257e8e570b41f6ed84cc326da67c1',
        nameAir: 'VietJet Air',
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        departure: '23:40',
        arrive: 'TOKYO',
      },
    ],
  },
];
function Item(props: BoxProps) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        bgcolor: (theme) =>
          theme.palette.mode === 'dark' ? '#101010' : '#fff',
        color: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
        border: '1px solid',
        borderColor: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
        p: 1,
        m: 1,
        borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
}

export default function GridTemplateRows() {
  return (
    <div style={{ width: '100%' }}>
      <Box sx={{ display: 'grid', gridTemplateRows: 'repeat(2, 1fr)' }}>
        <List sx={{ width: '100%' }}>
          {itemData.map((item) => (
            <Item key={item.type}>
              <Box
                sx={{
                  display: 'grid',
                  gridAutoFlow: 'row',
                  gridTemplateColumns: 'repeat(5, 1fr)',
                  gap: 1,
                }}
              >
                <Box sx={{ gridColumn: '1', gridRow: '1 ' }}>Hãng Bay</Box>
                <Box sx={{ gridColumn: '2', gridRow: '1' }}>
                  Điểm đi/ giờ đi
                </Box>
                <Box sx={{ gridColumn: '3', gridRow: '1' }}>Bay thẳng</Box>
                <Box sx={{ gridColumn: '4', gridRow: '1' }}>
                  Điểm Đến/giờ đến
                </Box>
                <Box sx={{ gridColumn: '5', gridRow: '1' }}>
                  Tổng thời gian bay
                </Box>
              </Box>
            </Item>
          ))}
        </List>
      </Box>
    </div>
  );
}

/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';

interface Props {
  ticketOptionOnClick: (newValue: any) => void;
  value: string | number;
  id: string;
}
const TicketOptions = ({
  ticketOptionOnClick,
  value,
  id,
}: Props): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  // Loai ve Handdle Select Change
  const LoaiVeHandleChange = (event: SelectChangeEvent) => {
    ticketOptionOnClick(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id={`select-ticket-type-label-${id}`}>Loại vé</InputLabel>
        <Select
          labelId={`select-ticket-type-label-${id}`}
          id={`select-ticket-type-${id}`}
          label="Loại vé"
          onChange={LoaiVeHandleChange}
          value={value}
          defaultValue={'Y'}
        >
          <MenuItem value={'Y'}>Hạng phổ thông </MenuItem>
          <MenuItem value={'S'}>Hạng phổ thông đặc biệt</MenuItem>
          <MenuItem value={'C'}>Hạng thương gia</MenuItem>
          <MenuItem value={'P'}>Hạng nhất</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default TicketOptions;

/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LuggageIcon from '@mui/icons-material/Luggage';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
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
  const [value, setValue] = React.useState('Ăn chay');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
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
            Kiểm tra và thanh toán
          </Typography>
          <Typography variant={'h6'} fontWeight={700} sx={{ marginBottom: 2 }}>
            Hành lý tiêu chuẩn
          </Typography>
          <Typography variant={'subtitle2'} align={'start'}>
            Đã bao gồm trong giá
          </Typography>
        </List>
      </Grid>
      <Grid item xs={12} sm={12}>
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <Typography variant={'h6'} fontWeight={700} sx={{ marginBottom: 2 }}>
            Chuyến bay đến Hồ Chí Minh City
          </Typography>
          <ListItem>
            <ListItemIcon>
              <LuggageIcon />
            </ListItemIcon>
            <ListItemText primary="Túi xách nhỏ" />
            <Typography>Đã bao gồm</Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <LuggageIcon />
            </ListItemIcon>
            <ListItemText primary="Hành lý cabin" />
            <Typography>Đã Bao gồm</Typography>
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={12} sm={12}>
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <Typography variant={'h6'} fontWeight={700} sx={{ marginBottom: 2 }}>
            Chuyến bay đến Nagoya
          </Typography>
          <ListItem>
            <ListItemIcon>
              <LuggageIcon />
            </ListItemIcon>
            <ListItemText primary="Túi Xách nhỏ" />
            <Typography>Đã bao gồm</Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <LuggageIcon />
            </ListItemIcon>
            <ListItemText primary="Hành lý cabin" />
            <Typography>Đã Bao gồm</Typography>
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={12} sm={12}>
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <Typography variant={'h6'} fontWeight={700} sx={{ marginBottom: 2 }}>
            Hành lý tính cước
          </Typography>
          <ListItem>
            <ListItemIcon>
              <LuggageIcon />
            </ListItemIcon>
            <ListItemText
              primary="Không thể thêm hành lý cho đặt vé này, tuy nhiên có thể thực hiện
              sau thông qua hãng hàng không"
            />
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={12} sm={12}>
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <Typography variant={'h6'} fontWeight={700} sx={{ marginBottom: 2 }}>
            Lựa chọn bữa ăn
          </Typography>
          <Typography variant={'subtitle2'} align={'start'}>
            Yêu cầu chế độ ăn đặc biệt
          </Typography>
        </List>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
          Nguyễn Văn A
        </Typography>
        <TextField
          select
          label="Option"
          variant="outlined"
          name={'Ăn Chay'}
          fullWidth
          value={value}
          onChange={handleChange}
        >
          {['Ăn Chay', 'Không ăn'].map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
    </Box>
  );
};

export default Form;

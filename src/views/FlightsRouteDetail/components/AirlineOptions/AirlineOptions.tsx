import React from 'react';
import { useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import { SelectChangeEvent } from '@mui/material';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
const mock = [
  {
    feedback:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    name: 'Clara Bertoletti',
    title: 'MUI lover',
    avatar: 'https://assets.maccarianagency.com/avatars/img1.jpg',
  },
  {
    feedback:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    name: 'Jhon Anderson',
    title: 'Senior Frontend Developer',
    avatar: 'https://assets.maccarianagency.com/avatars/img2.jpg',
  },
  {
    feedback:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    name: 'Chary Smith',
    title: 'SEO at Comoti',
    avatar: 'https://assets.maccarianagency.com/avatars/img3.jpg',
  },
];

const mockLocation = [
  {
    _id: {
      $oid: '624a6cbe34cecfb800539291',
    },
    id: '13',
    code: 'HAN',
    create_date: '2017-11-28 13:53:22.097',
    modify_date: '2017-11-28 13:53:22.097',
    name: 'Hà Nội',
    order: 0,
    parent_id: 6,
    show_search: 1,
    status: 1,
    user_create: 'duongtd',
    user_modify: 'duongtd',
  },
  {
    _id: {
      $oid: '624a6cbe34cecfb800539292',
    },
    id: '14',
    code: 'HPH',
    create_date: '2017-11-28 13:53:34.43',
    modify_date: '2017-11-28 13:53:34.43',
    name: 'Hải Phòng',
    order: 1,
    parent_id: 6,
    show_search: 1,
    status: 1,
    user_create: 'duongtd',
    user_modify: 'duongtd',
  },
  {
    _id: {
      $oid: '624a6cbe34cecfb800539293',
    },
    id: '15',
    code: 'DIN',
    create_date: '2017-11-28 13:53:44.353',
    modify_date: '2017-11-28 13:53:44.353',
    name: 'Điện Biên',
    order: 2,
    parent_id: 6,
    show_search: 1,
    status: 1,
    user_create: 'duongtd',
    user_modify: 'duongtd',
  },
  {
    _id: {
      $oid: '624a6cbe34cecfb800539294',
    },
    id: '16',
    code: 'THD',
    create_date: '2017-11-28 13:53:53.44',
    modify_date: '2017-11-28 13:53:53.44',
    name: 'Thanh Hóa',
    order: 3,
    parent_id: 6,
    show_search: 1,
    status: 1,
    user_create: 'duongtd',
    user_modify: 'duongtd',
  },
  {
    _id: {
      $oid: '624a6cbe34cecfb800539295',
    },
    id: '17',
    code: 'VII',
    create_date: '2017-11-28 13:54:09.773',
    modify_date: '2017-11-28 13:54:09.773',
    name: 'Vinh',
    order: 0,
    parent_id: 7,
    show_search: 1,
    status: 1,
    user_create: 'duongtd',
    user_modify: 'duongtd',
  },
  {
    _id: {
      $oid: '624a6cbe34cecfb800539296',
    },
    id: '18',
    code: 'HUI',
    create_date: '2017-11-28 13:54:17.907',
    modify_date: '2017-11-28 13:54:17.907',
    name: 'Huế',
    order: 1,
    parent_id: 7,
    show_search: 1,
    status: 1,
    user_create: 'duongtd',
    user_modify: 'duongtd',
  },
  {
    _id: {
      $oid: '624a6cbe34cecfb800539297',
    },
    id: '19',
    code: 'VDH',
    create_date: '2017-11-28 13:54:26.423',
    modify_date: '2017-11-28 13:54:26.423',
    name: 'Đồng Hới',
    order: 2,
    parent_id: 7,
    show_search: 1,
    status: 1,
    user_create: 'duongtd',
    user_modify: 'duongtd',
  },
  {
    _id: {
      $oid: '624a6cbe34cecfb800539298',
    },
    id: '20',
    code: 'DAD',
    create_date: '2017-11-28 13:54:41.387',
    modify_date: '2017-11-28 13:54:41.387',
    name: 'Đà Nẵng',
    order: 3,
    parent_id: 7,
    show_search: 1,
    status: 1,
    user_create: 'duongtd',
    user_modify: 'duongtd',
  },
  {
    _id: {
      $oid: '624a6cbe34cecfb800539299',
    },
    id: '21',
    code: 'PXU',
    create_date: '2017-11-28 13:54:52.4',
    modify_date: '2017-11-28 13:54:52.4',
    name: 'Pleiku',
    order: 4,
    parent_id: 7,
    show_search: 1,
    status: 1,
    user_create: 'duongtd',
    user_modify: 'duongtd',
  },
  {
    _id: {
      $oid: '624a6cbe34cecfb80053929a',
    },
    id: '22',
    code: 'TBB',
    create_date: '2017-11-28 13:55:03.487',
    modify_date: '2017-11-28 13:55:03.487',
    name: 'Tuy Hòa',
    order: 5,
    parent_id: 7,
    show_search: 1,
    status: 1,
    user_create: 'duongtd',
    user_modify: 'duongtd',
  },
  {
    _id: {
      $oid: '624a6cbe34cecfb80053929b',
    },
    id: '23',
    code: 'SGN',
    create_date: '2017-11-28 13:55:17.723',
    modify_date: '2017-11-28 13:55:17.723',
    name: 'Hồ Chí Minh',
    order: 0,
    parent_id: 8,
    show_search: 1,
    status: 1,
    user_create: 'duongtd',
    user_modify: 'duongtd',
  },
  {
    _id: {
      $oid: '624a6cbe34cecfb80053929c',
    },
    id: '24',
    code: 'CXR',
    create_date: '2017-11-28 13:55:38.227',
    modify_date: '2017-11-28 13:55:38.227',
    name: 'Nha Trang',
    order: 1,
    parent_id: 8,
    show_search: 1,
    status: 1,
    user_create: 'duongtd',
    user_modify: 'duongtd',
  },
  {
    _id: {
      $oid: '624a6cbe34cecfb80053929d',
    },
    id: '25',
    code: 'DLI',
    create_date: '2017-11-28 13:55:48.39',
    modify_date: '2017-11-28 13:55:48.39',
    name: 'Đà Lạt',
    order: 2,
    parent_id: 8,
    show_search: 1,
    status: 1,
    user_create: 'duongtd',
    user_modify: 'duongtd',
  },
  {
    _id: {
      $oid: '624a6cbe34cecfb80053929e',
    },
    id: '26',
    code: 'PQC',
    create_date: '2017-11-28 13:56:02.817',
    modify_date: '2017-11-28 13:56:02.817',
    name: 'Phú Quốc',
    order: 3,
    parent_id: 8,
    show_search: 1,
    status: 1,
    user_create: 'duongtd',
    user_modify: 'duongtd',
  },
  {
    _id: {
      $oid: '624a6cbe34cecfb80053929f',
    },
    id: '27',
    code: 'VCL',
    create_date: '2017-11-28 13:56:12.953',
    modify_date: '2017-11-28 13:56:12.953',
    name: 'Tam Kỳ',
    order: 4,
    parent_id: 8,
    show_search: 1,
    status: 1,
    user_create: 'duongtd',
    user_modify: 'duongtd',
  },
  {
    _id: {
      $oid: '624a6cbe34cecfb8005392a0',
    },
    id: '28',
    code: 'UIH',
    create_date: '2017-11-28 13:56:25.12',
    modify_date: '2017-11-28 13:56:25.12',
    name: 'Qui Nhơn',
    order: 5,
    parent_id: 8,
    show_search: 1,
    status: 1,
    user_create: 'duongtd',
    user_modify: 'duongtd',
  },
  {
    _id: {
      $oid: '624a6cbe34cecfb8005392a1',
    },
    id: '29',
    code: 'VCA',
    create_date: '2017-11-28 13:56:56.133',
    modify_date: '2017-11-28 13:56:56.133',
    name: 'Cần Thơ',
    order: 6,
    parent_id: 8,
    show_search: 1,
    status: 1,
    user_create: 'duongtd',
    user_modify: 'duongtd',
  },
  {
    _id: {
      $oid: '624a6cbe34cecfb8005392a2',
    },
    id: '30',
    code: 'VCS',
    create_date: '2017-11-28 13:57:13.147',
    modify_date: '2017-11-28 13:57:13.147',
    name: 'Côn Đảo',
    order: 7,
    parent_id: 8,
    show_search: 1,
    status: 1,
    user_create: 'duongtd',
    user_modify: 'duongtd',
  },
  {
    _id: {
      $oid: '624a6cbe34cecfb8005392a3',
    },
    id: '31',
    code: 'BMV',
    create_date: '2017-11-28 13:57:30.837',
    modify_date: '2017-11-28 14:41:33.833',
    name: 'Ban Mê Thuột',
    order: 8,
    parent_id: 8,
    show_search: 1,
    status: 1,
    user_create: 'duongtd',
    user_modify: 'duongtd',
  },
  {
    _id: {
      $oid: '624a6cbe34cecfb8005392a4',
    },
    id: '32',
    code: 'VKG',
    create_date: '2017-11-28 13:57:39.83',
    modify_date: '2017-11-28 13:57:39.83',
    name: 'Rạch Giá',
    order: 9,
    parent_id: 8,
    show_search: 1,
    status: 1,
    user_create: 'duongtd',
    user_modify: 'duongtd',
  },
  {
    _id: {
      $oid: '624a6cbe34cecfb8005392a5',
    },
    id: '33',
    code: 'CAH',
    create_date: '2017-11-28 13:59:05.02',
    modify_date: '2017-11-28 13:59:05.02',
    name: 'Cà Mau',
    order: 10,
    parent_id: 8,
    show_search: 1,
    status: 1,
    user_create: 'duongtd',
    user_modify: 'duongtd',
  },
  {
    _id: {
      $oid: '624a6cbe34cecfb8005392a6',
    },
    id: '34',
    code: 'BKK',
    create_date: '2017-11-28 13:59:25.103',
    modify_date: '2017-11-28 14:02:13.51',
    name: 'Bangkok',
    order: 0,
    parent_id: 9,
    show_search: 1,
    status: 1,
    user_create: 'duongtd',
    user_modify: 'duongtd',
  },
  {
    _id: {
      $oid: '624a6cbe34cecfb8005392a7',
    },
    id: '35',
    code: 'SIN',
    create_date: '2017-11-28 13:59:35.28',
    modify_date: '2017-11-28 13:59:35.28',
    name: 'Singapore',
    order: 2,
    parent_id: 9,
    show_search: 1,
    status: 1,
    user_create: 'duongtd',
    user_modify: 'duongtd',
  },
  {
    _id: {
      $oid: '624a6cbe34cecfb8005392a8',
    },
    id: '36',
    code: 'KUL',
    create_date: '2017-11-28 13:59:50.507',
    modify_date: '2017-11-28 13:59:50.507',
    name: 'Kuala Lumpur',
    order: 1,
    parent_id: 9,
    show_search: 1,
    status: 1,
    user_create: 'duongtd',
    user_modify: 'duongtd',
  },
  {
    _id: {
      $oid: '624a6cbe34cecfb8005392a9',
    },
    id: '37',
    code: 'JKT',
    create_date: '2017-11-28 14:06:22.88',
    modify_date: '2017-11-28 14:06:22.88',
    name: 'Jakarta',
    order: 3,
    parent_id: 9,
    show_search: 1,
    status: 1,
    user_create: 'duongtd',
    user_modify: 'duongtd',
  },
  {
    _id: {
      $oid: '624a6cbe34cecfb8005392aa',
    },
    id: '38',
    code: 'TYO',
    create_date: '2017-11-28 14:08:41.533',
    modify_date: '2017-11-28 14:08:41.533',
    name: 'Tokyo',
    order: 0,
    parent_id: 10,
    show_search: 1,
    status: 1,
    user_create: 'duongtd',
    user_modify: 'duongtd',
  },
  {
    _id: {
      $oid: '624a6cbe34cecfb8005392ab',
    },
    id: '39',
    code: 'PEK',
    create_date: '2017-11-28 14:09:02.643',
    modify_date: '2017-11-28 14:09:02.643',
    name: 'Bắc Kinh',
    order: 1,
    parent_id: 10,
    show_search: 1,
    status: 1,
    user_create: 'duongtd',
    user_modify: 'duongtd',
  },
  {
    _id: {
      $oid: '624a6cbe34cecfb8005392ac',
    },
    id: '40',
    code: 'CAN',
    create_date: '2017-11-28 14:09:13.927',
    modify_date: '2017-11-28 14:09:19.323',
    name: 'Quảng Châu',
    order: 2,
    parent_id: 10,
    show_search: 1,
    status: 1,
    user_create: 'duongtd',
    user_modify: 'duongtd',
  },
  {
    _id: {
      $oid: '624a6cbe34cecfb8005392ad',
    },
    id: '41',
    code: 'ICN',
    create_date: '2017-11-28 14:09:33.33',
    modify_date: '2017-11-28 14:09:33.33',
    name: 'Seoul',
    order: 3,
    parent_id: 10,
    show_search: 1,
    status: 1,
    user_create: 'duongtd',
    user_modify: 'duongtd',
  },
  {
    _id: {
      $oid: '624a6cbe34cecfb8005392ae',
    },
    id: '42',
    code: 'HKG',
    create_date: '2017-11-28 14:09:50.207',
    modify_date: '2017-11-28 14:09:50.207',
    name: 'Hồng Kông',
    order: 4,
    parent_id: 10,
    show_search: 1,
    status: 1,
    user_create: 'duongtd',
    user_modify: 'duongtd',
  },
  {
    _id: {
      $oid: '624a6cbe34cecfb8005392af',
    },
    id: '43',
    code: 'FRA',
    create_date: '2017-11-28 14:10:06.173',
    modify_date: '2017-11-28 14:10:06.173',
    name: 'Frankfurt',
    order: 0,
    parent_id: 11,
    show_search: 1,
    status: 1,
    user_create: 'duongtd',
    user_modify: 'duongtd',
  },
  {
    _id: {
      $oid: '624a6cbe34cecfb8005392b0',
    },
    id: '44',
    code: 'PAR',
    create_date: '2017-11-28 14:10:18.217',
    modify_date: '2017-11-28 14:10:18.217',
    name: 'Paris',
    order: 2,
    parent_id: 11,
    show_search: 1,
    status: 1,
    user_create: 'duongtd',
    user_modify: 'duongtd',
  },
  {
    _id: {
      $oid: '624a6cbe34cecfb8005392b1',
    },
    id: '45',
    code: 'SYD',
    create_date: '2017-11-28 14:35:19.083',
    modify_date: '2017-11-28 14:38:02.663',
    name: 'Sydney',
    order: 0,
    parent_id: 12,
    show_search: 1,
    status: 1,
    user_create: 'duongtd',
    user_modify: 'duongtd',
  },
  {
    _id: {
      $oid: '624a6cbe34cecfb8005392b2',
    },
    id: '46',
    code: 'MEL',
    create_date: '2017-11-28 14:39:38.997',
    modify_date: '2017-11-28 14:39:38.997',
    name: 'Melbourne',
    order: 1,
    parent_id: 12,
    show_search: 1,
    status: 1,
    user_create: 'duongtd',
    user_modify: 'duongtd',
  },
];

const AirportLocationMocks = [
  {
    country: 'Vietnam',
    area: 'Miền Bắc',
    city: 'Thủ đô Hà Nội',
    airport: 'HAN',
  },
  {
    country: 'Vietnam',
    area: 'Miền Nam',
    city: 'Tp. Hồ Chí Minh',
    airport: 'SGN',
  },
  { country: 'Vietnam', area: 'Miền Trung', city: 'Hải Phòng', airport: 'HPH' },
  { country: 'Vietnam', area: 'Miền Trung', city: 'Nha Trang', airport: 'NHA' },
];

interface MockLocation {
  _id: {
    $oid: string;
  };
  id: string;
  code: string;
  create_date: string;
  modify_date: string;
  name: string;
  order: number;
  parent_id: number;
  show_search: number;
  status: number;
  user_create: string;
  user_modify: string;
}

interface Film {
  title: string;
  year: number;
}

interface AirptLocatn {
  country: string;
  area: string;
  city: string;
  airport: string;
}
interface Props {
  label: string;
  value: any;
  takeoff: boolean;
  onChange: (newValue: any) => void;
}
function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

const AirlineOptions = (props: Props): JSX.Element => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState<readonly MockLocation[]>([]);
  const loading = open && options.length === 0;

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      await fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((response) => response.json())
        .then((json: MockLocation[]) => {
          console.log(json);
          if (active) {
            setOptions([...mockLocation]);
          }
        })
        .catch((error) => console.error(error));
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  const handleProductChange = (
    event: SelectChangeEvent<typeof mockLocation>,
    value,
  ) => {
    // setProduct(event.target.value);
    console.log(event.currentTarget);
    const a = mockLocation.find(
      (element) => element.code === event.target.value,
    );
    // if (a) {
    //   setProductOpstion(a);
    // } else {
    //   setProductOpstion(null);
    // }
  };

  return (
    <Autocomplete
      fullWidth
      id="asynchronous-demo"
      open={open}
      value={props.value}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      onInputChange={(_, value) => {
        console.log(value);
      }}
      // onChange={(event,value)=>handleProductChange(event,value)}
      onChange={(event, newValue: any) => {
        console.log(newValue?.code);
        props.onChange(newValue);
        console.log(JSON.stringify(newValue, null, ' '));
      }}
      isOptionEqualToValue={(option, value) => option.name === value.name}
      getOptionLabel={(option) => option.name + '(' + option.code + ')'}
      options={options}
      loading={loading}
      // popupIcon={<FlightTakeoffIcon />}
      renderInput={(params) => (
        <TextField
          {...params}
          label={props.label}
          required
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <React.Fragment>
                {' '}
                {props.takeoff ? <FlightTakeoffIcon /> : <FlightLandIcon />}
              </React.Fragment>
            ),
            endAdornment: (
              <React.Fragment>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
};

// Top films as rated by IMDb users. http://www.imdb.com/chart/top
const topFilms = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: 'Schindler\'s List', year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  {
    title: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
  },
  {
    title: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
  },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  {
    title: 'The Lord of the Rings: The Two Towers',
    year: 2002,
  },
  { title: 'One Flew Over the Cuckoo\'s Nest', year: 1975 },
  { title: 'Goodfellas', year: 1990 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Seven Samurai', year: 1954 },
  {
    title: 'Star Wars: Episode IV - A New Hope',
    year: 1977,
  },
  { title: 'City of God', year: 2002 },
  { title: 'Se7en', year: 1995 },
  { title: 'The Silence of the Lambs', year: 1991 },
  { title: 'It\'s a Wonderful Life', year: 1946 },
  { title: 'Life Is Beautiful', year: 1997 },
  { title: 'The Usual Suspects', year: 1995 },
  { title: 'Léon: The Professional', year: 1994 },
  { title: 'Spirited Away', year: 2001 },
  { title: 'Saving Private Ryan', year: 1998 },
  { title: 'Once Upon a Time in the West', year: 1968 },
  { title: 'American History X', year: 1998 },
  { title: 'Interstellar', year: 2014 },
];

export default AirlineOptions;

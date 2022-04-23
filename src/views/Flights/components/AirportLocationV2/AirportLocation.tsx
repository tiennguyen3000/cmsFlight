import React from 'react';
import { useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import AirportLocationData from 'resource/airportLocation.json';

interface IAirportOption {
  area: string;
  airport: string;
  national: string;
  code: string;
  label: string;
}

interface Props {
  label: string;
  value: IAirportOption;
  takeoff: boolean;
  onChange: (event: any, newValue: IAirportOption) => void;
}
const AirportLocation = ({
  label,
  value,
  takeoff,
  onChange,
}: Props): JSX.Element => {
  return (
    <Autocomplete
      defaultValue=""
      fullWidth
      // id="asynchronous-demo"
      value={value || null}
      onChange={(event, newValue: IAirportOption) => {
        onChange(event, newValue);
      }}
      isOptionEqualToValue={(option, value) => option.code === value.code}
      getOptionLabel={(option) => option.label}
      groupBy={(option) => option.national}
      options={AirportLocationData}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          required
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <React.Fragment>
                {takeoff ? <FlightTakeoffIcon /> : <FlightLandIcon />}
              </React.Fragment>
            ),
            endAdornment: (
              <React.Fragment>{params.InputProps.endAdornment}</React.Fragment>
            ),
          }}
        />
      )}
    />
  );
};

export default AirportLocation;

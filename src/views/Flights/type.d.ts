import Select, { SelectChangeEvent } from '@mui/material/Select';

type DestinationProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  fightClassOptionsOnchange: (event: SelectChangeEvent) => void;
}
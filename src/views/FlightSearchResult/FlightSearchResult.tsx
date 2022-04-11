import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Main from 'layouts/Main';
import { Container } from '@mui/material';
import { SearchResultList, FilterFlight, Ads } from './components';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const FlightSearchResult = (): JSX.Element => {
  return (
    <Main>
      <Box
        position={'relative'}
        sx={{
          width: '100%',
          height: 129,
          backgroundColor: '#febb02',
          boxSizing: 'border-box',
        }}
      />
      <Box
        position={'relative'}
        minHeight={'calc(100vh - 247px)'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        height={1}
        sx={{ backgroundColor: '#f0f3f5', paddingTop: 3 }}
      >
        <Container>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
              <Grid item xs>
                <FilterFlight />
              </Grid>
              <Grid item xs={7}>
                <SearchResultList />
              </Grid>
              <Grid item xs>
                <Ads />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Main>
  );
};
export default FlightSearchResult;

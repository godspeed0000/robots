import React from 'react';
import { Box, Container } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import ContactUs from './components/ContactUs';
import Card from './components/Card';
import ButtonAppBar from './components/HeaderThree';

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box mb='40px'>
        <ButtonAppBar />
      </Box>

      <Container
        maxWidth='false'
        sx={{
          width: '100%',
          bgcolor: 'var(--bg-overlay-color)',
          height: '100%',
          mb: '80px',
        }}
      >
        <Container maxWidth='xl'>
          <Box mb='10px'>
            <Typography
              sx={{
                color: '#249723',
                fontFamily: 'system-ui',
                fontSize: '26px',
                fontWeight: 800,
              }}
            >
              Register and Activate your Greens-Dot online
            </Typography>
          </Box>

          <Box>
            <ContactUs />
          </Box>
          <Box mt='40px'>
            <Card />
          </Box>
        </Container>
      </Container>
    </React.Fragment>
  );
};

export default App;

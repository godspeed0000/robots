import React from 'react';
import { Box, Button, Container } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import ResponsiveAppBar from './components/Header';
// import DrawerAppBar from './components/HeaderTwo';
import Typography from '@mui/material/Typography';
import ContactUs from './components/ContactUs';

var image = require('./helpdesk.jpg');


const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />

      <ResponsiveAppBar />
      {/* <DrawerAppBar /> // For better view, will do later */}

      <Container
        maxWidth='false'
        sx={{ width: '100%', bgcolor: '#6d1ed4', height: '100%' }}
      >
        <Container maxWidth='xl'>
          <Box sx={{ paddingLeft: '40px', paddingRight: '40px', mb: '50px' }}>
            <Box
              sx={{
                paddingLeft: '15px',
                paddingRight: '15x',
                width: '100%',
                height: 'auto',
              }}
            >
              <Typography
                variant='h2'
                component='h1'
                sx={{
                  fontFamily: 'system-ui',
                  fontWeight: '600',
                  fontSize: '3rem',
                  paddingTop: '40px',
                  color: 'white',
                }}
              >
                What's Zelle®? Glad you asked!
              </Typography>
            </Box>
            <Box pt='23px' px='15px'>
              <Typography sx={{ color: 'white', fontFamily: 'system-ui' }}>
                Zelle® is a great way to send money to friends and family, even
                if they bank somewhere different than you do. That means it’s
                super easy to pitch in or get paid back for all sorts of things
                like coffee for your coworkers or dinner with friends.{' '}
                <span>Zelle®</span> is already in lots of banking apps, so look
                for it in yours today.
              </Typography>
            </Box>
            <Box px='15px' mt='43px'>
              <a href='tel:+1-8444250085' style={{ textDecoration: 'none' }}>
                <Button
                  sx={{
                    backgroundColor: 'rgb(129, 93, 255)',
                    width: '-webkit-fill-available',
                    '&:hover': {
                      backgroundColor: 'rgb(129, 93, 255)',
                    },
                  }}
                  size='large'
                  variant='contained'
                >
                  Contact Us
                </Button>
              </a>
            </Box>
            <Box pl='15px'>
              <Typography
                variant='h2'
                component='h2'
                sx={{
                  mt: '44px',
                  color: 'white',
                  fontWeight: '600',
                  fontSize: '3rem',
                  fontFamily: 'system-ui',
                }}
              >
                Any Queries? We are happy to help!
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{ mx: '40px', width: '82%', borderRadius: '50%' }}
            component='img'
            alt='image not found'
            src={image}
          />
          <Box pt='23px' px='15px' align='center' >
              <Typography sx={{ color: 'white', fontFamily: 'system-ui', fontWeight: '600', fontSize: '2rem'}}>
                Online 24/7 
              </Typography>
              <Typography sx={{ color: 'white', fontFamily: 'system-ui', fontWeight: '600', fontSize: '2rem'}}>
                Customer Service
              </Typography>
              <Typography sx={{ color: 'white', fontFamily: 'system-ui', fontWeight: '600', fontSize: '2rem'}}>
                +1(888)XTZ-ABCD
              </Typography>
            </Box>
            <Box>
              <ContactUs />
            </Box>
        </Container>
      </Container>
    </React.Fragment>
  );
};

export default App;

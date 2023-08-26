import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import greensLogo from '../greenCircle.jpg'

const pages = ['How it works', 'Get Started', 'FAQ'];

function ResponsiveAppBar() {

  return (
    <AppBar position='static' sx={{ backgroundColor: 'white' }}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Typography
            variant='h6'
            // noWrap
            // component='a'
            // href='/'
            sx={{
              fontFamily: 'monospace',
              fontWeight: '900',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            GreensDot
          </Typography>

          {/* <Box
            sx={{
              flexGrow: 1,
              justifyContent: 'flex-end',
              display: { xs: 'none', md: 'flex' },
            }}
          >
            {}
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

export default function ButtonAppBar() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static'>
          <Toolbar>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant='h6'
              component='div'
              sx={{ flexGrow: 1, fontFamily: 'system-ui', fontWeight: '600' }}
            >
              GreensDot
            </Typography>
            <a href='tel:+1-8444250085' style={{ textDecoration: 'none' }}>
              <Button
                sx={{
                  fontFamily: 'system-ui',
                  fontWeight: '600',
                  color: 'white',
                }}
              >
                Call US : +1999XTZYZ
              </Button>
            </a>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}

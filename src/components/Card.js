import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import DeskImage from '../helpdesk.jpg';

export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={DeskImage}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Debit Cards for all your needs
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Mobile Banking, Cash back, savings features and more.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
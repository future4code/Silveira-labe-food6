import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export const CardRestaurant = () => {
  return (
    <Card sx={{ 
      width: 300,
      maxWidth: 350 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://i.redd.it/7zdkf48ktk371.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Restaurante
        </Typography>
        <Typography variant="body2" color="text.secondary">
          paz na batata
        </Typography>
      </CardContent>
      <CardActions>
        <p>30 - 60 min </p>
        <p>frete R$6,00</p>
      </CardActions>
    </Card>
  );
}
import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {divDivFrete} from './styled'

export const CardRestaurant = (props) => {
  return (
    <Card sx={{ 
      width: 300,
      maxWidth: 350 }}>
      <CardMedia
        component="img"
        height="140"
        image={props.item.logoUrl}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.item.description}
        </Typography>
      </CardContent>
      <divDivFrete>
        <p>tempo de entrega {props.item.deliveryTime} minutos </p>
        <p>frete R${props.item.shipping}</p>
      </divDivFrete>
    </Card>
  );
}

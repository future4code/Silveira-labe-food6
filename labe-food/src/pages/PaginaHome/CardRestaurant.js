import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {divDivFrete} from './styled'
import { irParaDetalhes } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom';



export const CardRestaurant = (props) => {
  const navigate = useNavigate()
  
  
  const onClickCard = (id) => {
    irParaDetalhes(navigate, id)
  }
  return (
    <Card onClick={() => onClickCard(props.id) } sx={{ 
      width: 300,
      maxWidth: 350 }}>
      <CardMedia
        component="img"
        height="140"
        image={props.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.titulo}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.descricao}
        </Typography>
      </CardContent>
      <divDivFrete>
        <p>tempo de entrega {props.delivery} minutos </p>
        <p>frete R${props.frete}</p>
      </divDivFrete>
    </Card>
  );
}

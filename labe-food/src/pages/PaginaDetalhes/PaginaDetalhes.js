import React from 'react';
import { CardActionArea } from '@material-ui/core';
import { CardMedia } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import Image from '../../img/download.jpg';
import { RecipeCardContainer } from './styled';
import { useProtectPage } from '../../routes/coordinator';

const PaginaDetalhes = () => {
  useProtectPage();

  return (<div> PaginaDetalhes
        
        <RecipeCardContainer>
       
        <CardActionArea>
            <CardMedia
            component={'img'}
            alt={'imagem'}
            height={"150px"}
            image={Image}
            title={'Hamburguer'}
            
            >

            </CardMedia>
            <Typography align='center'>
                <h2>Hamburguer</h2>
                <p>Pão, carne, quiejo, alface, tomate</p>
                <p>R$ 20,00</p>
                <Button color='primary'>Adicionar</Button>

            </Typography>
        </CardActionArea>
        
        
    </RecipeCardContainer>
    </div>
  )
}

export default PaginaDetalhes
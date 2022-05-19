import React, {useContext} from 'react'
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { CardActionArea } from '@material-ui/core'
import { CardMedia } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { RecipeCardContainer } from './styled'
import { useParams } from "react-router-dom";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";
import { StyledButton } from "../../global/GlobalStyled"
import Footer from '../../components/Footer/Footer';


const PaginaDetalhes = () => {
  const params = useParams()
  const { productAdd, setProductAdd } = useContext(GlobalStateContext);
  const [restaurant, getRestaurant] = useRequestData({}, `${BASE_URL}/restaurants/${params.id}`)
  console.log(restaurant.restaurant && restaurant.restaurant)
 

  const MenuRestaurant = restaurant.restaurant && restaurant.restaurant.products.map((comida) => {
    return (
      <CardActionArea key={comida.id}>
        <CardMedia component={'img'} alt={'imagem'}
          height={"150px"} image={comida.photoUrl} title={'Hamburguer'}
        >
        </CardMedia>
        <Typography align='center'>
          <h2>{comida.name}</h2>
          <p>{comida.description}</p>
          <p>R$ {comida.price}</p>
        </Typography>
        <StyledButton color='primary' onClick={() => adicionarProduto(comida)} >Adicionar</StyledButton>


      </CardActionArea>
    )

  })

  const adicionarProduto = (comida) => {
    alert("Produto adicionado ao carrinho")
		const novoCarrinho = [...productAdd, comida]
		setProductAdd(novoCarrinho)
      	
  }  

  return (

    <RecipeCardContainer>
      <Footer/>
      {restaurant.restaurant && <CardActionArea key={restaurant.restaurant.id}>

        <CardMedia component={'img'} alt={'imagem'}
          height={"150px"} image={restaurant.restaurant.logoUrl}>
        </CardMedia>
        <Typography align='center'>
          <h3>{restaurant.restaurant.category}</h3>
          <p>{restaurant.restaurant.deliveryTime}min R$ {restaurant.restaurant.shipping} </p>
          <p> {restaurant.restaurant.address}</p>
        </Typography>

      </CardActionArea>}      
      {MenuRestaurant}

    </RecipeCardContainer>

  )
}

export default PaginaDetalhes
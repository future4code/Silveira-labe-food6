
import React, { useContext, useState } from 'react';
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { useNavigate } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { CardRestaurant } from './CardRestaurant';
import { TextField } from '@material-ui/core';
import { Container, InputSearch } from './styled';
import SelectType from './SelectType';
import { useProtectPage } from '../../routes/coordinator';



const PaginaHome = () => {
  useProtectPage();
  const { restaurantList } = useContext(GlobalStateContext);
  const navigate = useNavigate()

  const [busca, setBusca] = useState()

  const carRestaurant = restaurantList && restaurantList.map((item) => {
    return (
      <CardRestaurant
        id={item.id}
        titulo={item.name}
        descricao={item.description}
        delivery={item.deliveryTime}
        frete={item.shipping}
        image={item.logoUrl}

      />
    )
  })
  const typeRestaurant = restaurantList && restaurantList.map((item) => {

  console.log(restaurantList)
  const [busca, setBusca] = useState('')
  const [tipoDeRestaurante, setTipoDeRestaurante] = useState('')


  const typeRestaurant  = restaurantList && restaurantList.map((item) => {

    return (
      <SelectType
        item={item}
        tipoDeRestaurante={tipoDeRestaurante}
        setTipoDeRestaurante={setTipoDeRestaurante}
      />
    )
    console.log(item)
  })

  const restaurantFilter = restaurantList && restaurantList.filter((restaurant) =>{
    return restaurant.name.toLowerCase().includes(busca.toLowerCase()) && ( !tipoDeRestaurante || restaurant.category === tipoDeRestaurante) 
  })

  return (
    <Container >
      <InputSearch

        id="outlined-basic"
        label="Outlined"
        variant="outlined"
      />

       id="outlined-basic"
       label="Outlined"
       variant="outlined"
       value={busca}
       onChange={(e)=>setBusca(e.target.value)}
        />

      <Button className='Button' variant="outlined">buscar</Button>
      {typeRestaurant}
      {restaurantFilter && restaurantFilter.map((restaurant)=>
        {return (
          <CardRestaurant          
          item={restaurant}
        />
      )})}
    </Container>
  )
}

export default PaginaHome;

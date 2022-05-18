
import React, { useContext, useState } from 'react'
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { useNavigate } from "react-router-dom";
import Button from '@material-ui/core/Button'
import { CardRestaurant } from './CardRestaurant'
import { TextField } from '@material-ui/core'
import { Container, InputSearch } from './styled'
import SelectType from './SelectType'



const PaginaHome = () => {
  const { restaurantList } = useContext(GlobalStateContext);
  const navigate = useNavigate()
  console.log(restaurantList)
  const [busca, setBusca] = useState()

  const carRestaurant = restaurantList && restaurantList.map((item) => {
    return (
        <CardRestaurant
        item={item}
      />
    )
  })
  const typeRestaurant  = restaurantList && restaurantList.map((item) => {
    return (
        <SelectType
        item={item}
      />
    )
  })


  return (
    <Container>
      <InputSearch
       id="outlined-basic"
       label="Outlined"
       variant="outlined"
        />
      <Button className='Button' variant="outlined">buscar</Button>
      {typeRestaurant}
      {carRestaurant}
    </Container>
  )
}

export default PaginaHome;

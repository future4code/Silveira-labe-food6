
import React, {useContext} from 'react'
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

    
  return (
    <Container>
      <InputSearch id="outlined-basic" label="Outlined" variant="outlined" />
      <Button className='Button' variant="outlined">buscar</Button>
      <SelectType />
      <CardRestaurant />
    </Container>
  )
}

export default PaginaHome;

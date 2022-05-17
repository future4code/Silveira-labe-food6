import React from 'react'
import Button from '@material-ui/core/Button'
import { CardRestaurant } from './CardRestaurant'
import { TextField } from '@material-ui/core'
import { Container, InputSearch } from './styled'
import SelectType from './SelectType'







const PaginaHome = () => {
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

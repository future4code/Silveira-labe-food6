
import React, { useContext, useState } from 'react';
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { useNavigate } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { CardRestaurant } from './CardRestaurant';
import { TextField } from '@material-ui/core';
import { BotaoPesquisa, Container, DivSearch, InputSearch, LogoHome, LogoHomeDiv, SelectRestaurantType } from './styled';
import SelectType from './SelectType';
import { useProtectPage } from '../../routes/coordinator';
import LogoVermelha from '../.././assets/logo-vermelha.png';



const PaginaHome = () => {
  useProtectPage();
  const { restaurantList } = useContext(GlobalStateContext);
  const [busca, setBusca] = useState('')
  const [tipoDeRestaurante, setTipoDeRestaurante] = useState('')
  const navigate = useNavigate()
  const {currentRestaurant, setCurrentRestaurant} = useContext(GlobalStateContext)

  const setRest = (rest) => {
    setCurrentRestaurant(rest)
  }

  const cardRestaurant = restaurantList && restaurantList.map((item) => {
    return (
      <CardRestaurant
        item={item}
        setRest={setRest}
      />
    )
  })

  const typeRestaurant = restaurantList && restaurantList.map((item) => {
    return (
      <SelectType
        item={item}
        tipoDeRestaurante={tipoDeRestaurante}
        setTipoDeRestaurante={setTipoDeRestaurante}
      />
    )
    
  })

  const restaurantFilter = restaurantList && restaurantList.filter((restaurant) => {
    return restaurant.name.toLowerCase().includes(busca.toLowerCase()) && (!tipoDeRestaurante || restaurant.category === tipoDeRestaurante)
  })

  return (
    <Container >
      <LogoHomeDiv>
        <LogoHome src={LogoVermelha} alt='labefood' />
      </LogoHomeDiv>
      <DivSearch>
        <InputSearch
          id="outlined-basic"
          label="Buscar restaurante"
          variant="outlined"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
        <SelectRestaurantType>
          {typeRestaurant}
        </SelectRestaurantType>

      </DivSearch>
      
      {restaurantFilter && restaurantFilter.map((restaurant) => {
        return (
          <CardRestaurant
            item={restaurant}
          />
        )
      })}
    </Container>
  )
}

export default PaginaHome;

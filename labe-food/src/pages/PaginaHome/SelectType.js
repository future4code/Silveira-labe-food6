import React from 'react'
import Button from '@material-ui/core/Button'
import { SelectRestaurantType } from './styled'


const SelectType = (props) => {

  const selectRestaurant = () => {
    if (props.item.category === props.tipoDeRestaurante) {
      props.setTipoDeRestaurante('')
    }
    else {
      props.setTipoDeRestaurante(props.item.category)
    }
  }

  return (
      <SelectRestaurantType>
        <Button
          variant="outlined"
          onClick={selectRestaurant}
        >{props.item.category}</Button>
      </SelectRestaurantType>

  )
}

export default SelectType;

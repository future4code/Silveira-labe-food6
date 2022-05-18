import React from 'react'
import Button from '@material-ui/core/Button'


const SelectType = (props) => {
  return (
    <div>
      <Button variant="outlined">{props.item.category}</Button>
    </div>
  )
}

export default SelectType;

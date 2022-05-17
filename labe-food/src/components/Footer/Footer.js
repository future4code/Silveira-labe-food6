import React from 'react'
import { useNavigate } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import { StyledToolbar } from "./styled"
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';

const Footer = () => {
  const navigate = useNavigate()


  return (
    <AppBar position="static">
      <StyledToolbar>
        <HomeIcon />
        <ShoppingCartIcon />
        <PersonIcon />
      </StyledToolbar>
    </AppBar>

  )
}
export default Footer;
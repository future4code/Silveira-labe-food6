import React from 'react';
import TextField from '@mui/material/TextField';
import LogoVermelha from '../.././assets/logo-vermelha.png';
import Backward from '../../assets/back.png';
import { App, Hr, Back, Logo, DivLogo, DivForm, Button } from './styled';
import { useNavigate } from 'react-router-dom';

const PaginaCadastro = () => {
  const navigate = useNavigate();




  return (
    <App>
      <DivLogo>
        <Back onClick={() => navigate("/login")} src={Backward} />
        <Hr></Hr>
        <Logo src={LogoVermelha} />
      </DivLogo>
      <h3>Cadastrar</h3>
      <DivForm>
        <form>
          <TextField id="outlined-basic" label="Nome" margin='dense' fullWidth variant="outlined" />
          <TextField id="outlined-basic" label="E-mail" margin='dense' fullWidth variant="outlined" />
          <TextField id="outlined-basic" label="CPF" margin='dense' fullWidth variant="outlined" />
          <TextField id="outlined-basic" label="Senha" margin='dense' fullWidth variant="outlined" />
          <TextField id="outlined-basic" label="Confirmar Senha" margin='dense' fullWidth variant="outlined" />
          <Button><strong>Criar</strong></Button>
        </form>
      </DivForm>
    </App>
  )
}
export default PaginaCadastro;
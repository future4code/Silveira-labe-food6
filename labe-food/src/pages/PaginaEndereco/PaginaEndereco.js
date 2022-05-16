import React from 'react';
import TextField from '@mui/material/TextField';
import Backward from '../../assets/back.png';
import { App, Hr, Back, DivLogo, DivForm, Button } from './styled';
import { useNavigate } from 'react-router-dom';


const PaginaCadastro = () => {
    const navigate = useNavigate();  
  
    return (
      <App>
        <DivLogo>
          <Back src={Backward} />
          <Hr></Hr>
        </DivLogo>
        <h3>Cadastrar</h3>
        <DivForm>
          <form>
            <TextField id="outlined-basic" label="Logradouro" margin='dense' fullWidth variant="outlined" />
            <TextField id="outlined-basic" label="Número" margin='dense' fullWidth variant="outlined" />
            <TextField id="outlined-basic" label="Complemento" margin='dense' fullWidth variant="outlined" />
            <TextField id="outlined-basic" label="Bairro" margin='dense' fullWidth variant="outlined" />
            <TextField id="outlined-basic" label="Cidade" margin='dense' fullWidth variant="outlined" />
            <TextField id="outlined-basic" label="Estado" margin='dense' fullWidth variant="outlined" />
            <Button><strong>Salvar</strong></Button>
          </form>
        </DivForm>
      </App>
    )
  }
  export default PaginaCadastro;
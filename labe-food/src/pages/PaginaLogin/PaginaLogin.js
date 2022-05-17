import React from 'react';
import { App, Logo, DivForm, DivLogo, Button, P } from './styled'
import LogoVermelha from '../.././assets/logo-vermelha.png';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { login } from '../../services/users';


const PaginaLogin = () => {
  const [form, onChange, clear] = useForm({ email: "", password: "", })
  const navigate = useNavigate();

  const onSubmitForm = (event) => {
    event.preventDefault();
    login(form, clear, navigate)
  }

  return (
    <App>
      <DivLogo>
        <Logo src={LogoVermelha} />
      </DivLogo>
      <h3>Entrar</h3>
      <DivForm>
        <form onSubmit={onSubmitForm}>
          <TextField
          name={"email"}
          value={form.email}
          onChange={onChange}
          id="outlined-basic"
          label="E-mail"
          margin='dense'
          fullWidth
          variant="outlined"
          placeholder='email@email.com'
          />
          <TextField
          name={"password"}
          value={form.password}
          onChange={onChange}
          id="outlined-basic"
          label="Senha"
          type="password"
          margin='dense'
          fullWidth
          variant="outlined"
          placeholder='Mínimo 6 caracteres'
          />
          <Button onClick={onSubmitForm}><strong>Entrar</strong></Button>
          <P onClick={() => navigate("/cadastro")}>Não possui cadastro? Clique aqui.</P>
        </form>
      </DivForm>
    </App>
  )
}

export default PaginaLogin;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useProtectPage } from '../../routes/coordinator';
import { Back, DivLogo, Hr, Logo } from '../PaginaCadastro/styled';
import CardDadosPessoais from './CardDadosPessoais';
import CardEndereco from './CardEndereco';
import LogoVermelha from '../.././assets/logo-vermelha.png';
import CardHistorico from './CardHistorico';
import { StyleText } from './styled';


const PaginaPerfil = () => {
  useProtectPage();
  const navigate = useNavigate()

  return (
    <div>
      <DivLogo>
        <Hr></Hr>
        <Logo src={LogoVermelha} />
      </DivLogo>
      <StyleText>
      <h3>Perfil</h3>
      </StyleText>
      <CardEndereco />
      <CardDadosPessoais />
      <hr/>
      <StyleText>
      <h3>Historico de Pedidos</h3>
      </StyleText>
      <CardHistorico/>
    </div>
  )
}

export default PaginaPerfil;
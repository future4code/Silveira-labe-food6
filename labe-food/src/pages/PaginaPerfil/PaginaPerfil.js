import React, { useContext } from 'react';
import { useProtectPage } from '../../routes/coordinator';
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { App, Hr, DivLogo, EditUser, DivUserStats, EditAddress, DivUserAddress, Hr2, DivFooter, CardHistory } from './styled';
import EditIcon from '../../assets/edit.png';
import Footer from '../../components/Footer/Footer'


const PaginaPerfil = () => {
  useProtectPage();
  const { addressUser } = useContext(GlobalStateContext);
  const { userStats } = useContext(GlobalStateContext);
  const { orderHistory, getOrderHistory } = useContext(GlobalStateContext);

  const setRest = (rest) => {
    getOrderHistory(rest)
  }

  const cardHistory = getOrderHistory && getOrderHistory.map((item) => {
    return (
      <CardHistory
        item={item}
        setRest={setRest}
      />
      
    )
  })
  console.log(cardHistory)
  return (
    <App>
      <DivLogo>
        <h3><strong>Meu Perfil</strong></h3>
        <Hr></Hr>
      </DivLogo>
      <EditUser>
        <DivUserStats>
          <p><strong>{userStats.name}</strong></p>
          <p><strong>{userStats.email}</strong></p>
          <p><strong>{userStats.cpf}</strong></p>
        </DivUserStats>
        <img src={EditIcon} />
      </EditUser>
      <EditAddress>
        <DivUserAddress>
          <h4>Endereço Cadastrado</h4>
          <p>{`${addressUser.street}, ${addressUser.number} - ${addressUser.city}`}</p>
        </DivUserAddress>
        <img src={EditIcon} />
      </EditAddress>
      <h4>Histórico de pedidos</h4>
      <Hr2></Hr2>
      <p><strong>{cardHistory}</strong></p>
      <DivFooter>
        <Footer />
      </DivFooter>
    </App>
  )
}

export default PaginaPerfil;
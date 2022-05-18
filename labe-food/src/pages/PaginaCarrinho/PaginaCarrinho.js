
import React, {useContext} from 'react'
import { GlobalStateContext } from "../../global/GlobalStateContext";
import {PagamentosContainer, CarrinhoContainer} from "../PaginaCarrinho/styled"
import { PagamentosContainer, CarrinhoContainer } from "../PaginaCarrinho/styled"
import CardEnderecos from './CardEnderecos';
import FormasDePagamentos from "./FormasDePagamentos"
import Footer from '../../components/Footer/Footer';
import { useProtectPage } from '../../routes/coordinator';

const PaginaCarrinho = () => {

  const { productAdd, setProductAdd } = useContext(GlobalStateContext);

  useProtectPage();

  return (
    <CarrinhoContainer>

      <h2>Meu Carrinho</h2>
      <CardEnderecos />
      <div>
        Cards de produtos Adicionados
      </div>
      <div>
        Frete R$6,00
        SUBTOTAL R$ 67,00
      </div>
      <PagamentosContainer>
        <FormasDePagamentos />
      </PagamentosContainer>
      <Footer />


    </CarrinhoContainer>
  )
}
export default PaginaCarrinho;






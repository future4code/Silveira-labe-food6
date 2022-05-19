
import React, {useContext} from 'react'
import { GlobalStateContext } from "../../global/GlobalStateContext";
import {PagamentosContainer, CarrinhoContainer} from "../PaginaCarrinho/styled"
import FormasDePagamentos from "./FormasDePagamentos"
import Footer from '../../components/Footer/Footer';
import { useProtectPage } from '../../routes/coordinator';
import CardEnderecos from '../../components/CardEnderecos/CardEnderecos';
import CardProdutoAdded from "../../components/CardProdutoAdded/CardProdutoAdded"


const PaginaCarrinho = (props) => {
  useProtectPage();
  console.log(props)
    // const { productAdd, setProductAdd } = useContext(GlobalStateContext);
  // console.log(productAdd)



  return (
    <CarrinhoContainer>

      <h2>Meu Carrinho</h2>
      <CardEnderecos />
      <CardProdutoAdded/>
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






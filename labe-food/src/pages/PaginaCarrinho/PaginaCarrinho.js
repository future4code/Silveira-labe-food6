import React from 'react'
import { TelaCarrinho } from '../../global/GlobalStyled';
import {MainContainer, PagamentosContainer} from "../PaginaCarrinho/styled"
import CardEnderecos from './CardEnderecos';
import FormasDePagamentos from "./FormasDePagamentos"
import Footer from '../../components/Footer/Footer';

const PaginaCarrinho = () => {
  return (
    <MainContainer>
    <TelaCarrinho>
      
        <h2>Meu Carrinho</h2>
        <CardEnderecos/>
        <div>
          Cards de produtos Adicionados
        </div>
        <div>
          Frete R$6,00  
          SUBTOTAL R$ 67,00
        </div>
        <PagamentosContainer>
        <FormasDePagamentos/>
        </PagamentosContainer>
        <Footer/>
                
    </TelaCarrinho>
    </MainContainer>
  )
}
export default PaginaCarrinho;
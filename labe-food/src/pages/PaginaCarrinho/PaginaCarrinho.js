
import React, { useContext, useState, useEffect } from 'react'
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { PagamentosContainer, CarrinhoContainer, ImgContainer, CardContainer } from "../PaginaCarrinho/styled"
import FormasDePagamentos from "./FormasDePagamentos"
import Footer from '../../components/Footer/Footer';
import { useProtectPage } from '../../routes/coordinator';
import CardEnderecos from '../../components/CardEnderecos/CardEnderecos';
import useForm from '../../hooks/useForm';



const PaginaCarrinho = (props) => {
  useProtectPage();
  const [pedido, setPedido] = useState()
  const { productAdd, setProductAdd } = useContext(GlobalStateContext);
  const { currentRestaurant, setCurrentRestaurant } = useContext(GlobalStateContext);
  const { paymentMethod, setPaymentMethod } = useContext(GlobalStateContext);



  // setPedido( {product: {id:productAdd.id, quantity: productAdd.quantity }, paymentMethod:paymentMethod } )

  console.log(pedido)
  const total = productAdd.reduce((total, item) =>
    total + item.price * item.quantity + currentRestaurant.shipping, 0
  )
  const CarrinhoDeCompras = productAdd && productAdd.map((produto) => {
    return (
      <CardContainer>
        <div key={produto.id} >
          <ImgContainer src={produto.photoUrl} />
        </div>
        <div>
          <strong>{produto.name}</strong>
          <p>{produto.description}</p>
          <p> R$ {produto.price}</p>
          <p>Quantidade: {produto.quantity}</p>
          <button>Remover</button>
          <p>Frete R$ {currentRestaurant.shipping}</p>
          <p>SubTotal: R$ {total}</p>
        </div>

      </CardContainer>
    )
  })
  console.log(productAdd)
  return (
    <CarrinhoContainer>

      <h2>Meu Carrinho</h2>
      <CardEnderecos />
      {CarrinhoDeCompras}
      <PagamentosContainer>
        <FormasDePagamentos />
      </PagamentosContainer>
      <button >Gerar Pedido</button>
      <Footer />


    </CarrinhoContainer>
  )
}
export default PaginaCarrinho;






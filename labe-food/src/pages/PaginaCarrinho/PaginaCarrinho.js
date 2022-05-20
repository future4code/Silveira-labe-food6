
import React, { useContext } from 'react'
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { PagamentosContainer, CarrinhoContainer, ImgContainer, CardContainer } from "../PaginaCarrinho/styled"
import FormasDePagamentos from "./FormasDePagamentos"
import Footer from '../../components/Footer/Footer';
import { useProtectPage } from '../../routes/coordinator';
import CardEnderecos from '../../components/CardEnderecos/CardEnderecos';
import axios from 'axios';
import { BASE_URL } from '../../constants/urls';



const PaginaCarrinho = (props) => {
  useProtectPage();
  const { productAdd, setProductAdd } = useContext(GlobalStateContext);
  const { currentRestaurant } = useContext(GlobalStateContext);
  const { paymentMethod } = useContext(GlobalStateContext);




  const gerarPedido = () => {
    const auth = localStorage.getItem("token");
    const headers = {
      headers: {
        auth: auth
      }
    }
     const body = {
      products: productAdd.map((item) => {
        return {id : item.id , quantity: item.quantity}
      }),
      paymentMethod:paymentMethod
    } 
    console.log(body)
    axios.post(`${BASE_URL}/restaurants/${currentRestaurant.id}/order`, body, headers)
      .then((res) => {
        console.log(res)
        setProductAdd([])
      })
      .catch((err) => {
        alert("Erro ao adicionar endereço.")
        console.log(err)
      })
  }


  console.log(productAdd)
  const total = productAdd.reduce((total, item) =>
    total + item.price * item.quantity + currentRestaurant.shipping, 0
  )

  const removerProduto = (produtos) => {
    const product = productAdd.find((item) => {
      return item.id === produtos.id
    })
    console.log(product, productAdd, produtos)
    if (product.quantity <= 1) {
      const novoCarrinho = productAdd.filter((produto) => {
        return produto.id !== produtos.id
      })
      setProductAdd(novoCarrinho)
    } else {
      const novoCarrinho = productAdd.map((produto) => {
        if (produto.id === produtos.id) {
          const carrinho = { ...produto, quantity: produto.quantity - 1 }
          return carrinho
        }
        return produto
      })
      setProductAdd(novoCarrinho)
    }

  }

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
          <button onClick={() => removerProduto(produto)}>Remover</button>
          <p>Frete R$ {currentRestaurant.shipping}</p>
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
      <p>SubTotal: R$ {total}</p>
      <PagamentosContainer>
        <FormasDePagamentos />
      </PagamentosContainer>
      <button onClick={gerarPedido} >Gerar Pedido</button>
      <Footer />


    </CarrinhoContainer>
  )
}
export default PaginaCarrinho;



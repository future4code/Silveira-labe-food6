import React, { useContext } from 'react'
import { GlobalStateContext } from "../../global/GlobalStateContext";
import {CardContainer,ImgContainer} from "./styled"

const CardProdutoAdded = () => {
    const { productAdd, setProductAdd } = useContext(GlobalStateContext);
    console.log(productAdd)

    const valorTotalCarrinho = () => {
        let valorTotal = 0
        for (let produto of productAdd) {
            valorTotal = produto.price
        }console.log(valorTotalCarrinho)
        return valorTotal       
    }

    let valorTotal = 0
        productAdd.forEach((item) => {
            valorTotal += item.price 

        })        
    const CarrinhoDeCompras = productAdd && productAdd.map((produto) => {
        return (
            <CardContainer>
                <div key={produto.id} >
                    <ImgContainer src={produto.photoUrl}/>
                </div>
                <div>
                    <strong>{produto.name}</strong>
                    <p>{produto.description}</p>
                    <p> R${produto.price}</p>
                    <button>Remover</button>
                </div>

            </CardContainer>
        )
    })

    return (

        <div>{CarrinhoDeCompras}</div>
    )
}


export default CardProdutoAdded;
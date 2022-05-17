import React from 'react'
import {EnderecoUsuario, EnderecoRestaurante} from "./styled"

const CardEnderecos = () => {
    return (
        <div>
            <EnderecoUsuario>
                <p>Endereço de entrega</p>
                <p>Rua Alessandra Vieira, 42</p>
            </EnderecoUsuario>
            <EnderecoRestaurante>
                <p>Burguer Vila Madalena</p>
                <p>R. Fradique Coutinho, 1136 - Vila Madalena</p>
            </EnderecoRestaurante>

        </div>
    )
}

export default CardEnderecos;
import React, {useContext} from 'react'
import { GlobalStateContext } from '../../global/GlobalStateContext';
import {EnderecoUsuario, EnderecoRestaurante} from "./styled"

const CardEnderecos = () => {
    const { addressUser } = useContext(GlobalStateContext);
    // const [ productAdd, setProductAdd ] = useContext(GlobalStateContext);
    // console.log(productAdd)
    
    
    return (
        <div>
            <EnderecoUsuario>
                <p>Endereço de entrega</p>
                <p>{addressUser.street}, {addressUser.number}</p>
            </EnderecoUsuario>
            <EnderecoRestaurante>
                <p>Burguer Vila Madalena</p>
                <p>R. Fradique Coutinho, 1136 - Vila Madalena</p>
            </EnderecoRestaurante>

        </div>
    )
}

export default CardEnderecos;
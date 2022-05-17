import styled from 'styled-components'


export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: 100vh ;
    background-color: grey;
`
export const EnderecoUsuario = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    border: 1px solid black;
    height: 6em;
    background-color: grey;

`

export const EnderecoRestaurante = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    height: 6em;
    justify-content: space-around;
    border: 1px solid black;

`
export const PagamentosContainer = styled.div`
    padding: 10px;
    margin-top: 2em;
`
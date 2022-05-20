import styled from 'styled-components'
import { TextField, Button, Card } from '@material-ui/core'

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`
export const InputSearch = styled(TextField)`
    display: flex;
    width: 100vw;

`
export const DivFrete = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    font-family: 'Roboto', sans-serif;;
`
export const LogoHome = styled.img`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 65px;
`

export const LogoHomeDiv = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    padding-bottom: 15px;
`

export const DivSearch = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    display: block;
    justify-content: space-between;
`

export const SelectRestaurantType = styled.div`
    display: flex;
    overflow-x: auto;
    padding: 8px;
`

export const CardEstilizado = styled(Card)`
    padding: 10px;
`

import styled from "styled-components"
import { Fab } from "@material-ui/core"


export const Container = styled.div`
display: flex;
/* flex-direction: row;
flex-wrap: wrap; */
margin: 30px;
flex-direction: column;
/* justify-content: space-between; */

`

export const BotaoAlterar = styled(Fab)`
display: flex;
justify-items: end;
`

export const StyleText = styled.div`
text-align: center;
`

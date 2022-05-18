import { Box, Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import * as React from 'react';
import { BotaoAlterar, Container } from './styled';
import useRequestData from "../../hooks/useRequestData";
import useProtectedPage from "../../hooks/useProtectPage";
import { useNavigate } from "react-router-dom";
import Fab from '@mui/material/Fab';
import EditIcon from '@material-ui/icons/Edit'
import { irParaEndereco } from '../../routes/coordinator';
import { BASE_URL } from '../../constants/urls';



const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '20px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function CardEndereco(props) {

    const navigate = useNavigate()
    const enderecos = useRequestData([], `${BASE_URL}/address`)
    console.log(enderecos)
    useProtectedPage()

    const irParaPaginaEndereco = (id) =>{
        irParaEndereco(navigate, id)
    }

    const Cardenderecos = enderecos.map((address) => {
        return (
            <div
                key={address.id}
                title={address.title}
                onClick={() => null}
            />
        )
    })
    return (
        <Container>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.primaryColor" gutterBottom>
                        Endereço
                    </Typography>
                    <Typography variant="h5" component="div">
                        {CardEndereco}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.primaryColor">
                        {props.body}
                    </Typography>
                    <Typography variant="body2">
                        Rua Maldivas-Maldivas
                        <br />
                        {/* {'"a benevolent smile"'} */}
                    </Typography>
                </CardContent>
                <>
                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                        <Fab
                            onClick={irParaPaginaEndereco}
                            color="primaryColor"
                            aria-label="edit"
                            >    
                            < EditIcon />
                        </Fab>
                    </Box>
                </>
            </Card>
        </Container>
    );
}
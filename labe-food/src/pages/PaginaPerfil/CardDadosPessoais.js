import { Box, Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import * as React from 'react';
import { BotaoAlterar, Container } from './styled';
import useRequestData from "../../hooks/useRequestData";
import useProtectedPage from "../../hooks/useProtectPage";
import { useNavigate } from "react-router-dom";
import Fab from '@mui/material/Fab';
import EditIcon from '@material-ui/icons/Edit'
import { irParaCadastro } from '../../routes/coordinator';
import { BASE_URL } from '../../constants/urls';




const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '20px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function CardDadosPessoais(props) {

    const navigate = useNavigate()
    const profile = useRequestData([], `${BASE_URL}/profile`)
    console.log(profile)
    useProtectedPage()

    const irParaPaginaCadastro = (id) =>{
        irParaCadastro(navigate, id)
    }

    const profileCard = profile.map((profile) => {
        return (
            <div
                key={profile.id}
                title={profile.title}
                onClick={() => null}
            />
        )
    })
    return (
        <Container>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.primaryColor" gutterBottom>
                        Dados Pessoais
                    </Typography>
                    <Typography variant="body2">
                         {profileCard}
                        <br />
                    </Typography>
                </CardContent>
                <BotaoAlterar>
                        <Fab
                        onClick={irParaPaginaCadastro}
                        color="primaryColor" 
                        aria-label="edit"
                        >
                            < EditIcon />
                        </Fab>
                </BotaoAlterar>
            </Card>
        </Container>
    );
}
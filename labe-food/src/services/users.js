import axios from "axios";
import { BASE_URL } from '../constants/urls';
import { useNavigate } from 'react-router-dom';



export const login = (body, clear, navigate) => {
    console.log(body)
    axios.post(`${BASE_URL}/login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token);
            clear();
            navigate('/')
        })
        .catch((err) => {
            alert("Erro ao fazer login")
            console.log(err)            
        })
}
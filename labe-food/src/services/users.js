import axios from "axios";
import { BASE_URL } from '../constants/urls';

export const login = (body, clear, navigate) => {

    console.log(body)

    axios.post(`${BASE_URL}/login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token);
            clear();
            navigate('/home')
            
        })
        .catch((err) => {

            alert(err.response.data.message)
            console.log(err)            
        })
}

export const signup = (body, clear, navigate) => {
    console.log(body)
    axios.post(`${BASE_URL}/signup`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token);
            clear();
            alert("Usuário cadastrado com sucesso!")
            navigate('/endereco')
        })
        .catch((err) => {
            alert("Erro ao fazer login")
            console.log(err)
        })
}

export const addres = (body, clear, navigate) => {
    const auth = localStorage.getItem("token");
    const headers = {
        headers: {
            auth: auth
        }
    }
    console.log(body)
    axios.put(`${BASE_URL}/address`, body, headers)
        .then((res) => {
            localStorage.setItem("token", res.data.token);
            clear();
            console.log(res)
            navigate('/')
        })
        .catch((err) => {
            alert("Erro ao adicionar endereço.")
            console.log(err)
        })
}



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



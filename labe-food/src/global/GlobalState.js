import { GlobalStateContext } from "./GlobalStateContext";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/urls";


export default function GlobalState(props) {
    const [restaurantList, setRestaurantList] = useState([]);

    const getRestaurantList = () => {//pegar a lista de restaurantes da API
        axios.get(`${BASE_URL}/restaurants`,{
            headers: {
                Auth: localStorage.getItem('token')
            }
        })
            .then((response) => {
                setRestaurantList(response.data.restaurants);
            })
            .catch((error) => console.log(error.message));
    };


    useEffect(() => {
        getRestaurantList();
    }, []);


    const data = { 
        restaurantList,
        setRestaurantList,      
    };

    return (
        <div>
            <GlobalStateContext.Provider value={data} >
                {props.children}
            </GlobalStateContext.Provider>
        </div>
    )

} 
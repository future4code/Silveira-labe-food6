import { GlobalStateContext } from "./GlobalStateContext";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/urls";


export default function GlobalState(props) {
    const [restaurantList, setRestaurantList] = useState([]);
    const [addressUser, setAddressUser] = useState([]);
    const [orderHistory, setOrderHistory] = useState([]);
    const [activeOrder, setActiveOrder] = useState([]);
    const [productAdd, setProductAdd] = useState([]);
    

    const getRestaurantList = () => {//pega a lista de restaurantes da API
        
        axios.get(`${BASE_URL}/restaurants`, {
            headers: {
                Auth: localStorage.getItem('token')
            }
        }).then((response) => {
            setRestaurantList(response.data.restaurants);
        }).catch((error) => console.log(error));
    };
    useEffect(() => {
        getRestaurantList();
    }, []);

    const getAddressUser = () => {//pega endereço do usuario
        axios.get(`${BASE_URL}/profile/address`, {
            headers: {
                Auth: localStorage.getItem('token')
            }
        }).then((response) => {
            setAddressUser(response.data.address);
        }).catch((error) => console.log(error.message));
    };
    useEffect(() => {
        getAddressUser();
    }, []);
    const getOrderHistory = () => {//pega a historico de pedidos do usuario
        axios.get(`${BASE_URL}/orders/history`, {
            headers: {
                Auth: localStorage.getItem('token')
            }
        }).then((response) => {
            setOrderHistory(response.data.orders);
        }).catch((error) => console.log(error.message));
    };
    useEffect(() => {
        getOrderHistory();
    }, []);

    const getActiveOrder = () => {//pega pedido ativo do usuario
        axios.get(`${BASE_URL}/active-order`, {
            headers: {
                Auth: localStorage.getItem('token')
            }
        }).then((response) => {
            setActiveOrder(response.data.order);
        }).catch((error) => console.log(error.message));
    };
    useEffect(() => {
        getActiveOrder();
    }, []);

    const data = {
        restaurantList,
        setRestaurantList,
        addressUser,
        setAddressUser,
        orderHistory,
        setOrderHistory,
        activeOrder,
        setActiveOrder,
        productAdd,
        setProductAdd
    };

    return (
        <div>
            <GlobalStateContext.Provider value={data} >
                {props.children}
            </GlobalStateContext.Provider>
        </div>
    )

} 
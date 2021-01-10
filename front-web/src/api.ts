import axios from "axios"
import { OrderPayload } from "./Orders/types";

const API_URL= process.env.REACT_APP_API_URL
const mapboxToken = process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX;

export const fetchProducts = () =>{
    return axios(`${API_URL}/products`);
};

export const fetchLocalMapBox : any = (local : string) =>{
        
        return axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`)
}

export const saveOrder = (payload : OrderPayload) =>{
    return axios.post(`${API_URL}/orders`,payload)
}
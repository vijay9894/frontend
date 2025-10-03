import axios from "axios";
import {store} from "./appstore/store"
import {logout} from "./appstore/slices/UserSlice"

const api = axios.create(
    {
        baseURL : 'http://localhost:3000',
        withCredentials : true , 
        headers :{ 'Content-Type': 'application/json' }
    }
);


api.interceptors.response.use(
    response => response,
    error => {
        if(error.response?.status === 401){
            store.dispatch(logout())
            localStorage.removeItem('email');
            localStorage.removeItem('password');
           window.location.href = '/'
        }
        return Promise.reject(error);   
    }
)

export default api;
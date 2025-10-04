import axios from "axios";
import { store } from "./appstore/store"
import { setAccessToken, logout } from "./appstore/slices/UserSlice"

const api = axios.create(
    {
        baseURL: 'http://localhost:3000',
        withCredentials: true,
        headers: { 'Content-Type': 'application/json' }
    }
);


// in every request to backend it attaches the access token to the headers 
api.interceptors.request.use((config) => {
    const token = store.getState().User.accessToken;
    if (token) {
        config.headers.Authorization = ` ${token}`;
    }
    return config;
});

// auto log off when user sent request to backend and  auto refreshes when access token is expired
api.interceptors.response.use(
    response => response,
    async (error) => {

        const originalRequest = error.config;
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                console.log({withCredentials : true})
                const res = await axios.get("http://localhost:3000/refresh" ,  { withCredentials: true , headers :{ 'Content-Type': 'application/json'}} );   // refresh token coming in json body
                const newAccessToken = res.data.accessToken;
                console.log("token is rfershing", newAccessToken);
                store.dispatch(setAccessToken(newAccessToken));

                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`; // after coming json body put in authorization bearer
                return api(originalRequest);
            }
            catch (error) {
                store.dispatch(logout())
                localStorage.removeItem('email');
                localStorage.removeItem('password');
                window.location.href = '/'
            }
        }

        return Promise.reject(error);
    }
)

export default api;
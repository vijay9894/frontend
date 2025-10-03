import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { login } from "@/appstore/slices/UserSlice";
import axios from "axios"
import api from "../api"

function MyLogin() {

    const navigate = useNavigate();


    const dispatch = useDispatch();


    const { search } = useLocation();

    const params = new URLSearchParams(search);
    const email = params.get("email");

    if (email) {
        useEffect(() => {
            if (!localStorage.getItem('email')) {
                navigate('/')
            }
            localStorage.setItem('email', email as string);
            navigate('/home');
        }, []);
    }



    // useEffect(() => {
    //     if (localStorage.getItem('email') && localStorage.getItem('password')) {
    //         console.log("navigating to home");
    //         navigate('/home');
    //     } 
    // }, [])



    async function handleClick() {
        const formemail = (document.getElementById('myInput') as HTMLInputElement).value;
        const password = (document.getElementById('myPassword') as HTMLInputElement).value;
        if (!formemail || !password) {
            alert("Please enter email and password");
            return;
        }
        try {
            const res = await api.post("http://localhost:3000/login", { formemail, password });
            console.log("Login successful", res.data.email);
            dispatch(login({ email: res.data.email }))
            localStorage.setItem('email', formemail);
            localStorage.setItem('password', password);
            navigate('/home');
        }catch (error) {
            console.error("Login failed", error);
            alert("Login failed. Please check your credentials.");
        }
      
    }

    async function handleEmailLogin() {
        window.location.href = await "http://localhost:3000/google/login"
    }

    return <div className="flex justify-center items-center h-screen bg-gray-700">
        <div className="border-2 border-pink text-white rounded-lg lg:w-105 lg:h-96 p-10 bg-black sm:h-full w-full flex flex-col justify-center shadow-xl">
            <div className="flex justify-center font-semibold sm:font-bold">   Login Form </div>
            <div className="flex flex-col space-y-8 m-10 justify-center h-60">
                <input type=" text" id="myInput" placeholder="Enter your email" className="rounded-lg p-2 text-white hover:bg-gray-500" />
                <input type="password" id="myPassword" placeholder="Enter your password" className="rounded-lg p-2 text-white hover:bg-gray-500" />
                <button onClick={handleClick} className="bg-blue-600 text-white rounded-lg p-2 text-lg hover:bg-blue-400 cursor-pointer">Login </button>
            </div>
            <hr></hr>
            <div className="flex justify-center mt-4">
                <button onClick={handleEmailLogin} className=" flex text-white rounded-lg p-2 text-lg cursor-pointer hover:bg-gray-800">Continue with Google  <FcGoogle className=" text-3xl ml-2" />  </button>
            </div>
        </div>
    </div>
}

export default MyLogin;

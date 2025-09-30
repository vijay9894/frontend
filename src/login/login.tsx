import { useNavigate , useLocation } from "react-router-dom";
import { useEffect } from "react";
import { FaGoogle } from "react-icons/fa";

function MyLogin() {

    const navigate = useNavigate();
    const {search} = useLocation();

    const params = new URLSearchParams(search);
    const email = params.get("email");

    if(email){
        useEffect(()=>{
            if(!localStorage.getItem('email')){
                navigate('/')
            }
            localStorage.setItem('email', email as string);
            navigate('/home');
        },[]);
    }



    // useEffect(() => {
    //     if (localStorage.getItem('email') && localStorage.getItem('password')) {
    //         console.log("navigating to home");
    //         navigate('/home');
    //     } 
    // }, [])



    function handleClick() {
            const formemail = (document.getElementById('myInput') as HTMLInputElement).value;
            const password = (document.getElementById('myPassword') as HTMLInputElement).value;
            localStorage.setItem('email', formemail);
            localStorage.setItem('password', password);
            navigate('/home');
        
    }

 async function handleEmailLogin() {
      window.location.href = await "http://localhost:3000/google/login"
 }

    return <div className="flex justify-center items-center h-screen bg-white">
        <div className="border-2 border-pink text-white rounded-lg lg:w-105 lg:h-96 p-10 bg-gray-800 sm:h-full w-full flex flex-col justify-center">
            <div className="flex justify-center font-semibold sm:font-bold">   Login Form </div>
            <div className="flex flex-col space-y-8 m-10 justify-center h-60">
                <input type=" text" id="myInput" placeholder="Enter your email" className="rounded-lg p-2 text-white hover:bg-blue-20" />
                <input type="password" id="myPassword" placeholder="Enter your password" className="rounded-lg p-2 text-white hover:bg-blue-20" />
                <button onClick={handleClick} className="bg-blue-600 text-white rounded-lg p-2 text-lg hover:bg-blue-400 ">Login </button>
            </div>
            <hr></hr>
            <div className="flex justify-center">
                <button onClick={handleEmailLogin} className=" flex text-white rounded-lg p-2 text-lg cursor-pointer hover:bg-gray-500 ">Continue with Google  <FaGoogle className=" ml-2 mt-1.5 "/>  </button>
            </div>
        </div>
    </div>
}

export default MyLogin;

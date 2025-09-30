import { useNavigate , useLocation } from "react-router-dom";
import { useEffect } from "react";

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
            const email = (document.getElementById('myInput') as HTMLInputElement).value;
            const password = (document.getElementById('myPassword') as HTMLInputElement).value;
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
            navigate('/home');
        
    }

 async function handleEmailLogin() {
      window.location.href = await "http://localhost:3000/google/login"
 }

    return <div className="flex justify-center items-center h-screen bg-black">
        <div className="border-2 border-pink text-white rounded-lg lg:w-96 lg:h-96 p-10 bg-gray-800 sm:h-full w-full flex flex-col justify-center">
            <div className="flex justify-center font-semiboldc sm:font-bold">   Login Form </div>
            <div className="flex flex-col space-y-8 m-10 justify-center h-60">
                <input type=" text" id="myInput" placeholder="Enter your email" className="rounded-lg p-2 text-white hover:bg-blue-20" />
                <input type="password" id="myPassword" placeholder="Enter your password" className="rounded-lg p-2 text-white hover:bg-blue-20" />
                <button onClick={handleClick} className="bg-blue-600 text-white rounded-lg p-2 text-lg hover:bg-blue-400 ">Login </button>
                <button onClick={handleEmailLogin} className="bg-blue-600 text-white rounded-lg p-2 text-lg hover:bg-blue-400 ">Login With Email </button>
            </div>
        </div>
    </div>
}

export default MyLogin;

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addSocialBook, emptybook } from "../appstore/slices/SocialSlice";
import { addMathBook } from "../appstore/slices/MathSlice";
import { logout } from "../appstore/slices/UserSlice";
import axios from "axios";
import api from "@/api";



interface RootState {
    Social: {
        books: []; // Replace 'any' with the actual type of books if known
    };
}

function Home() {
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('email')) {
            console.log("navigating to home");
            navigate('/home');
        } else {
            navigate('/');
        }
    }, [])

    const email = localStorage.getItem('email');

    // Logout Functionalitty 
   async function handleLogout() {
        localStorage.removeItem('email');
        if (localStorage.getItem('password') !== null) {
            localStorage.removeItem('password');
        }
        dispatch(emptybook(""))
       const res = await api.post("http://localhost:3000/logout")
        dispatch(logout());
        navigate('/');
        
        
    }


    let socialbooks = useSelector((state: RootState) => state.Social.books)
    let mathsbooks = useSelector((state: any) => state.Maths.books)
    const user = useSelector((state: any) => state.User)

    let dispatch = useDispatch();

    useEffect(() => {
        console.log("user details", user)
    }, [socialbooks, mathsbooks]);


    function goToCart() {
        console.log("getbooks", socialbooks)
        navigate('/cart');
    }

    function addBookToSocialSlice() {
        dispatch(addSocialBook("social book"))
    }

    function addBookToMathsSlice() {
        dispatch(addMathBook("maths book"))
    }

    async function checkExpiration() {

        try {
            console.log("Checking session expiration...");
            const res = await api.get("http://localhost:3000/profile")
            alert("Session is still valid");
            console.log("Expiration response", res.data);
        }
        catch (error) {
            localStorage.removeItem('email');
            console.error("Error checking expiration", error);
        }

    }

    return (
        <>
            <div className="bg-black h-15 border-0.1 border-white flex justify-end items-center p-4">
                <button className=" mt-20 text-semibold text-white cursor-pointer border-2 p-2 bg-blue-500 hover:bg-red-700 rounded-xl" onClick={handleLogout}> Log Out </button>
            </div>
            <div className="flex justify-center h-200 bg-black">
                <div className="flex  justify-center items-center">
                    <h1 className="text-3xl text-white font-bold ">Welcome {email} </h1>
                </div>
                <div className="">
                    <button className="ml-6 border-2 border-white text-white rounded-xl p-4 cursor-pointer" onClick={addBookToSocialSlice}> AddSocialBook :{socialbooks.length}</button>
                    <button className="ml-6 border-2 border-white text-white rounded-xl p-4 cursor-pointer" onClick={addBookToMathsSlice}> AddMathsBook :{mathsbooks.length} </button>
                    <button className="ml-6 border-2 border-white text-white rounded-xl p-4 cursor-pointer" onClick={goToCart}> GoToCart </button>
                    <button className="ml-6 border-2 border-white text-white rounded-xl p-4 cursor-pointer" onClick={checkExpiration}> checkExpiration </button>
                </div>
            </div>
        </>
    )
}

export default Home;
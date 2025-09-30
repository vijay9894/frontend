import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addSocialBook, emptybook } from "../appstore/slices/SocialSlice";
import { addMathBook } from "../appstore/slices/MathSlice";



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
    function handleLogout() {
        localStorage.removeItem('email');
        dispatch(emptybook(""))
        navigate('/');
    }


    let socialbooks = useSelector((state: RootState) => state.Social.books)
    let mathsbooks = useSelector((state: any) => state.Maths.books)

    let dispatch = useDispatch();

    useEffect(() => {

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
                </div>
            </div>
        </>
    )
}

export default Home;
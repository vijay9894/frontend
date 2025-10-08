import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Cart(){

const navigate = useNavigate();

const socialBooks = useSelector((state : any)=>  state.Social.books);
const mathBooks = useSelector((state:any) => state.Maths.books)
let totalBookCount = 0;

let socialcount=0;
for( let i=0; i<socialBooks.length; i++){
        socialcount = socialcount+1;
}

let mathsCount=0;
for(let i=0 ; i<mathBooks.length; i++){
    mathsCount = mathsCount+1;
}

totalBookCount = socialcount + mathsCount;


function goToHome(){
     navigate("/home")
}
function goToPratice(){
    navigate("/pratice")
}
    
return (
        <>
           <div className=" h-236"> 
               <p className=" ">  No of Books Are Added : {totalBookCount} </p>
               <div className="">
                       < button className="border-2 rounded-xl p-3 mt-4  cursor-pointer " onClick={goToHome}> Go To Home </button>
                       < button className="ml-4 border-2 rounded-xl p-3 mt-4  cursor-pointer " onClick={goToPratice}> Go To Main </button>
               </div>
          </div>
        </>
    )
}
export default Cart;
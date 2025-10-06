import Home from './home/home.tsx';
import Login from './login/login.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './cart/cart.tsx';
import Pratice from './tailwind/Pratice.tsx';
import Design from './tailwind/Design.tsx';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function App() {
  const mode = useSelector((state:any)=>state.User.mode)
  useEffect(()=>{
    if(mode === 'Dark'){
      document.documentElement.classList.add("dark")
    }
    else{
       document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("mode" , mode)
  },[mode])
  return (
    <>
    <BrowserRouter>
         <Routes>
              <Route  path='/' element={<Login/>}/> 
              <Route path='/home' element={<Home/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/tailwind' element={<Pratice/>}/>
              <Route path='/pratice' element={<Design/>}/>
         </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

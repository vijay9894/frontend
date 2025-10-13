import Home from './home/home.tsx';
import Login from './login/login.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './cart/cart.tsx';
import Pratice from './tailwind/Pratice.tsx';
import Design from './tailwind/Design.tsx';
import TailwindPratice from './tailwind/TailwinPratice.tsx'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import PersonalChat from './chatting/PersonalChat.tsx';
// import Form from './formwithValidations/Form.tsx';
// import Translator from './tailwind/Translator.tsx';
import ReactCropper from './tailwind/ReactCropper.tsx';
import DataTable from './tailwind/DataTable.tsx';

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
              <Route path='/tail' element={<TailwindPratice/>}/>
              <Route path='/chat' element={<PersonalChat/>}/>
              <Route path='/cropper' element={<ReactCropper/>}/>
              <Route path='/table' element={<DataTable columns={[]} data={[]}/>}/>
         </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

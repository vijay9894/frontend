import Home from './home/home.tsx';
import Login from './login/login.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReducerExample from './reducer/example.tsx';
import Cart from './cart/cart.tsx';

function App() {
  return (
    <>
    <BrowserRouter>
         <Routes>
              <Route  path='/' element={<Login/>}/> 
              <Route path='/home' element={<Home/>}/>
              <Route path='/example' element={<ReducerExample/>}/> 
              <Route path='/cart' element={<Cart/>}/>       
         </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

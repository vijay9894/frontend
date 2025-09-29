import Home from './home/home.tsx';
import Login from './login/login.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReducerExample from './reducer/example.tsx';
import Cart from './cart/cart.tsx';
import Pratice from './tailwind/Pratice.tsx';
import Design from './tailwind/Design.tsx';

function App() {
  return (
    <>
    <BrowserRouter>
         <Routes>
              <Route  path='/' element={<Login/>}/> 
              <Route path='/home' element={<Home/>}/>
              <Route path='/example' element={<ReducerExample/>}/> 
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/tailwind' element={<Pratice/>}/>
              <Route path='/pratice' element={<Design/>}/>
         </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

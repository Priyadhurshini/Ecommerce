import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import  Shop  from './Pages/Shop/shop';
import { Cart } from './Pages/Cart/Cart';
import { ShopContextProvider } from './context/shop-context';


function App(){
  return(
    <div className='App'>
      
      <ShopContextProvider>
        <BrowserRouter>
        <Navbar></Navbar>
        {/* <MyCart></MyCart> */}
        {/* <Cart>Inside cart tag in app</Cart> */}
        <Routes>
          <Route path='/' element={<Shop></Shop>}></Route>
          <Route path='/cart' element ={<Cart></Cart>}></Route>
        </Routes>
      </BrowserRouter>
   
      </ShopContextProvider>
    </div>
  )
}

export default App;
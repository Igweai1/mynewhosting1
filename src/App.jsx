import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './component/navbarfiles/Navbar' 
import Footer from './component/Footer-files/Footer'
import Home from './component/pages/Home'
import About from './component/pages/About'
import Service from './component/pages/Service'
import Cart from './component/pages/Cart'
import Contact from './component/pages/Contact'
import Signup from './component/pages/Signup'
import Login from './component/pages/Login'
import Notefound from './component/pages/Notefound'
import Search from './component/pages/Search'
import ProductDetails from './component/pages/ProductDetails'
import { CartProvider } from './component/Context/CartContext' // ✅ import context provider
function App() {
 
  return (
    <CartProvider>

    <Router>
      <Navbar/>
      <Routes> 
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/cat'element={<Cart/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/product/:id' element={<ProductDetails/>}/>
        <Route path='*' element={<Notefound/>}></Route>
      </Routes> 
      
      <Footer/>
    </Router>
    </CartProvider>
      
    
  )
}

export default App

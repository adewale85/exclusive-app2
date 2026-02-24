

import SignUp from './pages/auth/signup/SignUp'
import Layout from './Component/Layout/Layout'
import { Route, Routes } from 'react-router-dom'
import Homepages from './Component/Product/homepages'
import Login from './pages/auth/login/Login'
import Wishlist from './pages/wishlist/Wishlist'
import Cart from './pages/cart/Cart'
import Checkout from './pages/checkout/Checkout'
import Account from './pages/Account'
import About from './pages/About'
import Contact from './pages/Contact'
import Error from './pages/Error'
import AllProductDetails from './pages/AllProductDetails'
import Navbar from './Component/Layout/Navbar'
import Footer from './Component/Layout/Footer'
import EveryProduct from './Component/Products'





function App() {
return (
  
   <main>
   
    <Navbar/>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Homepages />} />
        
         <Route path="signup" element={<SignUp />} />
         <Route path="login" element={<Login/>} />
        
        </Route>
         
         <Route path="Wishlist" element={<Wishlist />} />
         <Route path="cart" element={<Cart />} />
         <Route path="checkout" element={<Checkout />} />
         <Route path="account" element={<Account />} />
         <Route path="about" element={<About/>} />
         <Route path="contact" element={<Contact/>} />
         <Route path="error" element={<Error/>} />
         <Route path="/product/:id" element={<AllProductDetails/>} />
         <Route path='everyProduct' element={<EveryProduct/>} />
         </Routes>
         <Footer/>

         </main>
         
          )
}


export default App

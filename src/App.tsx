

import SignUp from './pages/auth/signup/SignUp'



import Layout from './Component/Layout/Layout'
import { Route, Routes } from 'react-router-dom'


import Homepages from './pages'

import Login from './pages/auth/login/Login'
import Wishlist from './pages/wishlist/Wishlist'
import Cart from './pages/cart/Cart'
import Checkout from './pages/checkout/Checkout'
import Account from './pages/Account'
import About from './pages/About'
import Contact from './pages/Contact'
import Error from './pages/error'










function App() {

  return (
   
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Homepages />} />
        
         <Route path="signup" element={<SignUp />} />
         <Route path="log in" element={<Login/>} />
        
        </Route>
         
         <Route path="wishlist" element={<Wishlist />} />
         <Route path="cart" element={<Cart />} />
         <Route path="checkout" element={<Checkout />} />
         <Route path="account" element={<Account />} />
         <Route path="about" element={<About/>} />
         <Route path="contact" element={<Contact/>} />
         <Route path="error" element={<Error/>} />
         
      </Routes>
   









  )
}

export default App

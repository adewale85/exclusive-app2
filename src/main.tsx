import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './CartContext'
import { Toaster } from 'sonner'
import { WishListProvider } from './WishListContext'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <BrowserRouter>
     <WishListProvider>
     <CartProvider>
      <Toaster richColors position='top-right'/>
    <App/>
    </CartProvider>
    </WishListProvider>
       </BrowserRouter>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ProductProvider } from './Components/Contexts/ProductContext.jsx'
import { CartProvider } from './Components/Contexts/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <ProductProvider>
    <CartProvider>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
    </CartProvider>
  </ProductProvider> ,
)

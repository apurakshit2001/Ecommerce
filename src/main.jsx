import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ProductProvider } from './Components/Contexts/ProductContext.jsx'
import { CartProvider } from './Components/Contexts/CartContext.jsx'
import { AuthProvider } from './Components/Contexts/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <ProductProvider>
        <CartProvider>
          <StrictMode>
            <App />
          </StrictMode>
        </CartProvider>
      </ProductProvider>
    </AuthProvider>
  </BrowserRouter>
)

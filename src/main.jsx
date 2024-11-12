import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ProductProvider } from './Components/ProductContext.jsx'

createRoot(document.getElementById('root')).render(
  <ProductProvider>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </ProductProvider> ,
)

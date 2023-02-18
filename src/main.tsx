import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { CartCtxProvider } from './store/cart-context'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CartCtxProvider>
    <App />
    </CartCtxProvider>
  </React.StrictMode>,
)

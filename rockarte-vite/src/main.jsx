import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css'; 
import 'primeicons/primeicons.css'; 
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; 
import { CartProvider } from './components/CartContext';  

ReactDOM.createRoot(document.getElementById('root')).render(
  <CartProvider> 
    <App />
  </CartProvider>,
);

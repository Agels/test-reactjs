import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import store from "./app/store";
import Product from './pages/product';
import Cart from './pages/cart';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Provider store={store}>
     <BrowserRouter>
         <Routes>
            <Route path='/' element={ <Home />} />
            <Route path='product/:name' element={<Product />} />
            <Route path='cart' element={<Cart />}/>
        </Routes>
    </BrowserRouter>

   </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

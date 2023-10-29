import React from 'react';
import ReactDOM from 'react-dom';

import { Routes, Route, BrowserRouter } from 'react-router-dom'; 
import ToDo from './Todo/ToDo.jsx'; 
import Home from './Home/Home.jsx'; 
import Detalhe from './Detalhe/Detalhe.jsx';
import './public/style.css'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/ToDo" element={<ToDo />} />
        <Route path="/detalhe/:id" element={<Detalhe />} /> {}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home.js';
import Cadastro from './pages/cadastro.js';
import Viloes from './pages/consulta.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/cadastro' element={<Cadastro/>} />
        <Route path='/viloes' element={<Viloes/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Quiz from './quiz';
import Teste from './teste';
import Resultado from './resultado';
import Sec from './pages/sec';
import Info from './pages/info';
import Cv from './pages/cv';
import Adm from './pages/adm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Quiz />} />
        <Route path='/teste' element={<Teste />} />
        <Route path='/resultado' element={<Resultado />} />
        <Route path='/informatica' element={<Info/>} />
        <Route path='/secretariado' element={<Sec />} />
        <Route path='/comunicacao' element={<Cv />} />
        <Route path='/administração' element={<Adm />} />
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

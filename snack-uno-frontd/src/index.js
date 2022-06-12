import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Cadastro from './components/organisms/cadastro/index'
import EntregaPagamento from './components/organisms/entregaPagamento/index'
import Login from './components/organisms/login/index'

import Navegacao from './components/molecules/navegacao/index.js'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Cesta from './components/organisms/cesta/index.js'
import Fab from '@mui/material/Fab';
import HelpIcon from '@mui/icons-material/Help';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navegacao />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="cadastro" element={<Cadastro />} />
        <Route path="login" element={<Login />} />
        <Route path="minha-cesta" element={<Cesta />} />
        <Route path="minha-cesta/entrega" element={<EntregaPagamento />} />
      </Routes>
      <div className="ajuda-float">
        <Fab color="primary" variant="extended" size="medium">
          <HelpIcon sx={{ mr: 1 }} />
          Ajuda
        </Fab>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

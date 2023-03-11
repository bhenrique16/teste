import React from 'react'
import ReactDOM from 'react-dom/client'

import Menu from './pages/Menu';
import Clima from './pages/Clima'
import SearchCEP from './pages/SearchCEP'
import PageContato from './pages/PageContato'



import { BrowserRouter,Routes,Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    
    <Routes>
    <Route exact path="/" element={<Menu/>} /> 
      <Route path="/clima" element={<Clima/>} /> 
      <Route path="/cep" element={<SearchCEP/>} />   
      <Route path="/contato" element={<PageContato/>} />
    
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Carros from './pages/Carros';
import DetalhesCarro from './pages/DetalhesCarro';
import MinhasReservas from './pages/MinhasReservas';
import RodapeSite from './components/rodape';
import Layout from './pages/proprietario/Layout';
import Dashboard from './pages/proprietario/Dashboard';
import AdicionarCarro from './pages/proprietario/AdicionarCarro';
import GerenciarCarros from './pages/proprietario/GerenciarCarros';
import GerenciarReservas from './pages/proprietario/GerenciarReservas';

const App = () => {

  const [mostrarLogin, setMostrarLogin] = useState(false);
  const isCaminhoDoDono = useLocation().pathname.startsWith('/proprietario');

  return (
    <div>
      
      {!isCaminhoDoDono && <Navbar setMostarLogin={setMostrarLogin}/>}

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/carro-detalhes/:id' element={<DetalhesCarro/>}/>
        <Route path='/carros' element={<Carros/>}/>
        <Route path='/minhas-reservas' element={<MinhasReservas/>}/>
        <Route path='/proprietario' element={<Layout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path='adicionar-carro' element={<AdicionarCarro/>}/>
          <Route path='gerenciar-carros' element={<GerenciarCarros/>}/>
          <Route path='gerenciar-reservas' element={<GerenciarReservas/>}/>
        </Route>
      </Routes>

      {!isCaminhoDoDono &&  <RodapeSite/>}
  
    </div>
  );
};

export default App;
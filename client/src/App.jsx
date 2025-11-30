import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Carros from './pages/Carros';
import DetalhesCarro from './pages/DetalhesCarro';
import MinhasReservas from './pages/MinhasReservas';
import RodapeSite from './components/rodape';

const App = () => {

  const [mostrarLogin, setMostrarLogin] = useState(false);
  const isCaminhoDoDono = useLocation().pathname.startsWith('/painel');

  return (
    <div>
      
      {!isCaminhoDoDono && <Navbar setMostarLogin={setMostrarLogin}/>}

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/carro-detalhes/:id' element={<DetalhesCarro/>}/>
        <Route path='/carros' element={<Carros/>}/>
        <Route path='/minhas-reservas' element={<MinhasReservas/>}/>
      </Routes>

      {!isCaminhoDoDono &&  <RodapeSite/>}
  
    </div>
  );
};

export default App;
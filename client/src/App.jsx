import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { useLocation } from 'react-router-dom';

const App = () => {

  const [mostrarLogin, setMostrarLogin] = useState(false);
  const isCaminhoDoDono = useLocation().pathname.startsWith('/painel');

  return (
    <div>
      {!isCaminhoDoDono && <Navbar setMostarLogin={setMostrarLogin}/>}
    </div>
  );
};

export default App;
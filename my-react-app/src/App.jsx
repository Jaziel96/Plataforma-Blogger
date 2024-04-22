import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Posts from './components/Posts';
import 'tailwindcss/tailwind.css'; // Si estás utilizando JavaScript o JSX para estilos


const App = () => {
  return (
    <Router>
  <div>
    <Routes>
      {/* Define tus rutas dentro de <Routes> */}
      <Route path="/" element={<Posts />} />
      {/* Aquí puedes agregar más rutas según sea necesario */}
    </Routes>
  </div>
    </Router>
  );
};

export default App;

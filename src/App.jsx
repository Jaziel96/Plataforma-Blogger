import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Post from './components/Post';
import Layout from './components/Layout';
import Detailspost from './components/Detailspost';
import Users from './components/Users';

const App = () => {
  return (
    <BrowserRouter>
  
      <Routes>
        {/* Define tus rutas dentro de <Routes> */}
        <Route path="/" element={<Layout />} >
          <Route index element={<Post />} />
          <Route path='/post' element={<Post />} />
          <Route path='/post/:id' element={<Detailspost />} />
          <Route path='/user/:id' element={<Users />} />
        </Route>
        {/* Aquí puedes agregar más rutas según sea necesario <Route path="/post/:id" element={<Detailspost />} /> */}
      </Routes>
    
    </BrowserRouter>
  );
};

export default App;

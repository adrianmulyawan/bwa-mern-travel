import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home.page';
import PropertiesPage from './pages/properties.page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/properties/:id" element={ <PropertiesPage /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

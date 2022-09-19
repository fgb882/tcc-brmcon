
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Portfolio from './pages/portfolio';
import Login from './pages/login';
import Admin from './pages/admin';
import React from 'react';


function App() {



  return (
    <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/login" element={<Login />} />

        {/*Protected page */}
        <Route path="/admin" element={<Admin />} />

      </Routes>
    </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;

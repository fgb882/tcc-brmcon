
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home'
import Portfolio from './pages/portfolio'


function App() {



  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

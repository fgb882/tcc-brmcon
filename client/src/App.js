
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home'
import Portfolio from './pages/portfolio'
import Admin from './pages/admin';


function App() {



  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />

        {/*protected page*/}
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

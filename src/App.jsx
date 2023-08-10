import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Menu from './components/Menu/Menu';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Footer from './components/Footer/Footer';
import Weather from './pages/Weather/Weather';
import './App.css'


function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/weather" element={<Weather title="Aplicativo" />} />
        <Route path="/contact" element={<Contact title="Contato" />} />
        <Route path="/about" element={<About title="Sobre" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

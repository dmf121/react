import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import Services from './components/services/services';
import Projects from './components/Projects/Projects';
import About from './components/about/About';
import Careers from './components/Careers/Careers';
import Contact from './components/contact/Contact';



import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>

    <Routes>
      <Route path="/" exact element={<Home/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/careers" element={<Careers/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>

      <Footer/>
     

      

    </div>
  );
}

export default App;

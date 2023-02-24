import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './NavBar';
import Header from './Header';
import Curriculum from './Curriculum';
import Proyectos from './Proyectos';
import Contacto from './Contacto';
import Footer from './Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <Header />
    <Curriculum />
    <Proyectos />
    <Contacto />
    <Footer />
  </React.StrictMode>
);



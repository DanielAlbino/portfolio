import React from 'react';
import './sass/main.sass'
import NavBar from './components/Navbar'
import Footer from './components/Footer'
import Routes from './route/index'
import {BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router basename="/portfolio">
      <div className="App">
        <NavBar/>
        <Routes />
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

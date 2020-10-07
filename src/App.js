import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';
import Work from './Components/Work';
import Contact from './Components/Contact';



function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Work />
      <Contact />
    </div>
  );
}

export default App;

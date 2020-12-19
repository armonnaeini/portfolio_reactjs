import React, { Component } from 'react';
import Home from './Home';
import About from './About';
import Work from './Work';
import Contact from './Contact';

class MainHome extends Component {
    state = {};
    render() {
        return(

            <div className = "container-scroll" >
            <Home />
            <About />
            <Work />
            <Contact />
          </div>
       
        ); 
    }
}

export default MainHome;
import React, { Component } from 'react';
import Home from './Home';
import Contact from './Contact';
import NavBar from './NavBar';

class MainHome extends Component {
    state = {};
    render() {
        return(

            <div className = "container-scroll" >
                        <NavBar / >

            <Home />
            <Contact />
          </div>
       
        ); 
    }
}

export default MainHome;
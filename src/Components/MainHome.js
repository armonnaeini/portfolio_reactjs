import React, { Component } from 'react';
import Home from './Home';
import NavBar from './NavBar';

class MainHome extends Component {
    state = {};
    render() {
        return(

            <div className = "container-scroll" >
                        <NavBar / >

            <Home />
          </div>
       
        ); 
    }
}

export default MainHome;
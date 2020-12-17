import React, { Component } from 'react';

class Home extends Component {
    state = {};
    render() {
        return(
            <div className = "home-wrapper" id = "home">
                <div className = "home-section">
                    <div className = "header-container">
                        <h1>I turn dreams into a digital reality.</h1>
                        <h3>Howdy. My name is Armon Naeini. Welcome to my personal site.</h3>
                    </div>
                    <div className = "canvas-container">
                        <p>canvas goes here</p>
                    </div>
                </div>
            </div>
                
        ); 
    }
}

export default Home;
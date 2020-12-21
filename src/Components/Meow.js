import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class Meow extends Component {
    state = {};
    render() {
        return(
            <div className = "project-section">
              <div className = "project-wrapper">
                    <div className = "project-info-wrapper">
                        <div className = "project-info-container">
                            <h1 className = "project-header">Meow Wolf</h1>
                            <h2 className = "project-sub-header">COMING SOON</h2>
                            <p className = "project-blurb">
                                I'm currently working on an installation within the new Meow Wolf building located in Denver, CO,
                                set to go public towards the end of 2021.
                                
                                What I have in store is crazy, but for now, I have to keep it on the hush. Stay tuned.
                            </p>
                        </div>
                    </div>
                  
                    <div className = "project-image-container">
                        
                    </div>

            </div>
        </div>
        ); 
    }
}

export default Meow;
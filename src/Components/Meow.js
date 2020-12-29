import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

class Meow extends Component {
    state = {};
    render() {
        return(
            <div className = "project-section">
              <div className = "project-wrapper">
                    <div className = "project-info-wrapper">
                        <Link to ="/">
                            <div className = "return-container">
                                <p className =" hvr-underline-from-left">Return</p>
                            </div>
                        </Link>
                        <div className = "project-info-container">
                            <h1 className = "project-header">Meow Wolf</h1>
                            <h2 className = "project-sub-header">COMING SOON</h2>
                            <p className = "project-blurb">
                                I'm currently working with a team of creative technologist to develop an installation within the new Denver based Meow Wolf,
                                set to launch late 2021.
                                
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
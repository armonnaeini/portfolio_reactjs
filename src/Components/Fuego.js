import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

class Fuego extends Component {
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
                            <h1 className = "project-header">FuegoUX</h1>
                            <h2 className = "project-sub-header">UX Design, Web Development</h2>
                            <p className = "project-blurb">
                                A website I recently re-designed and developed, FuegoUX is an experiential design company
                                with an ephasis on simplicity and modernism. Fuego's new site was designed with a sense of 
                                minimalism, with a strong emphasis on both typography and iconagraphy. 
                            </p>
                            <span className = "site-link"><a href="https://www.fuegoux.com/" target="_blank">Visit site</a></span>
                        </div>
                    </div>
                  
                    <div className = "project-image-container">
                        <div className = "img-container">
                            <img src ="https://i.imgur.com/bVoECES.png" href="img1" className = "responsive-image"/>
                        </div>
                        <div className = "img-container">
                            <img src ="https://i.imgur.com/GHuaomv.png" href="img1" className = "responsive-image"/>
                        </div>


                        
                       

                        
                    </div>

            </div>
        </div>
        ); 
    }
}

export default Fuego;
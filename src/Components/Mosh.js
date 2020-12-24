import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

class Mosh extends Component {
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
                            
                            <h1 className = "project-header">Typographic Design</h1>
                            <h2 className = "project-sub-header">Illustrator</h2>
                            <p className = "project-blurb">
                                In my free time, I do enjoy dabbling with graphic design, particularly typographic 
                                design. Here is a collection of some of my favorite designs I've recently created.
                            </p>
                        </div>
                    </div>
                  
                    <div className = "project-image-container">
                        <div className = "img-container">
                            <img src ="https://i.imgur.com/89olGyR.png" href="img1" className = "responsive-image"/>
                        </div>
                        <div className = "img-container">
                            <img src ="https://i.imgur.com/pQ6fbZu.png" href="img1" className = "responsive-image"/>
                        </div>
                        <div className = "img-container">
                            <img src ="https://i.imgur.com/mvEGVgb.png" href="img1" className = "responsive-image"/>
                        </div>
                        <div className = "img-container">
                            <img src ="https://i.imgur.com/W2QNd0l.png" href="img1" className = "responsive-image"/>
                        </div>
                        <div className = "img-container">
                            <img src ="https://i.imgur.com/h7bZVV1.png" href="img1" className = "responsive-image"/>
                        </div>
                    </div>

            </div>
        </div>
        ); 
    }
}

export default Mosh;
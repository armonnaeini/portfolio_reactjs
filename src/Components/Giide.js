import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

class Giide extends Component {
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
                            <h1 className = "project-header">Giide</h1>
                            <h2 className = "project-sub-header">UX Design, Web Development, Graphic Design, Marketing,
                            Social Media</h2>
                            <p className = "project-blurb">
                                A selection of my UX projects during my time working as a UX designer and developer at mobile app startup,
                                Giide. My duties involved user experience design and development for web and mobile,
                                graphic design for social media, as well as Alexa Skill and AR prototyping.
                            </p>
                        </div>
                    </div>
                  
                    <div className = "project-image-container">
                    <div className="scroll-container">
                            <span>Scroll for more</span>
                        </div>
                        <div className = "img-container-1">
                            <img src ="https://i.imgur.com/1AC3W43.png" href="img1" className = "responsive-image"/>
                        </div>
                        <div className = "img-container">
                            <img src ="https://i.imgur.com/W7ooitp.png" href="img1" className = "responsive-image"/>
                        </div>
                        <div className = "img-container">
                            <img src ="https://i.imgur.com/DO68rwa.png" href="img1" className = "responsive-image"/>
                        </div>
                        <div className = "img-container">
                            <img src ="https://i.imgur.com/hC3FOVH.png" href="img1" className = "responsive-image"/>
                        </div>
                    </div>

            </div>
        </div>
        ); 
    }
}

export default Giide;
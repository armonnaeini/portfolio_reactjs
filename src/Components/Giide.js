import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class Giide extends Component {
    state = {};
    render() {
        return(
            <div className = "project-section">
              <div className = "project-wrapper">
                    <div className = "project-info-wrapper">
                        <div className = "project-info-container">
                            <h1 className = "project-header">Giide</h1>
                            <h2 className = "project-sub-header">UX Design, Web Development, Graphic Design, Marketing,
                            Social Media</h2>
                            <p className = "project-blurb">
                                A selection of my UX projects during my time working as a UX designer and devloper at mobile app startup,
                                Giide. My duties involved user experience design and development, for both web and mobile,
                                graphic design for social media, as well as Alexa Skill and AR prototyping.
                            </p>
                        </div>
                    </div>
                  
                    <div className = "project-image-container">
                        <div className = "img-container">
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
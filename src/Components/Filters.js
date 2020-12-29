import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import { HashLink as Link } from 'react-router-hash-link';

class Filters extends Component {
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
                            <h1 className = "project-header">ofxARKit</h1>
                            <h2 className = "project-sub-header">openFrameworks, C++, GLSL, C#</h2>
                            <p className = "project-blurb">
                                I absolutely love to work with augmented reaility technologies, so I dove into the mobile space working with
                                ofxARKit, openFrameworks' port for Apple's ARKit. I developed two different face-tracking
                                applications, where I texturize the user's face mesh with either GLSL or predefined imagery.
                            </p>
                        </div>
                    </div>
                  
                    <div className = "project-image-container">
                        <div className = "video-container-filter">
                            <ReactPlayer
                                id = "react-player"
                                playsInline
                                className='react-player'
                                url='https://player.vimeo.com/video/493094936'
                                playing
                                controls="true"
                                width= "100%"
                                height="100%"
                                muted
                            />
                        </div>

                        <div className = "video-container-filter">
                            <ReactPlayer
                                id = "react-player"
                                playsInline
                                className='react-player'
                                url='https://player.vimeo.com/video/493095689'
                                playing
                                controls="true"
                                width= "100%"
                                height="100%"
                                muted
                            />
                        </div>

                        
                    </div>

            </div>
        </div>
        ); 
    }
}

export default Filters;
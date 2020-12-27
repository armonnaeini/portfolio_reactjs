import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import { HashLink as Link } from 'react-router-hash-link';

class Media extends Component {
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
                            <h1 className = "project-header">New Media Art</h1>
                            <h2 className = "project-sub-header">TouchDesigner, GLSL, Python, openFrameworks</h2>
                            <p className = "project-blurb">
                                For the past year and a half, I have been training myself in TouchDesigner. I initially started
                                my creative coding endeavors in p5.js and Processing, then moved onto openFrameworks. After discovering
                                TouchDesigner, I instantly fell in love and have been obsessed with the software since. I strive to 
                                produce surreal, evoking visuals, for music videos, projections, or simply for lesiure viewing on web/mobile.
                                The projects listed are a comobination of my works in TouchDesigner and openFrameworks.
                            </p>
                        </div>
                    </div>
                  
                    <div className = "project-image-container">
                        <div className = "video-container-media">
                            <ReactPlayer
                                id = "react-player"
                                playsInline
                                className='react-player'
                                url='https://player.vimeo.com/video/492913417'
                                playing
                                controls="true"
                                width= "89%"
                                height="89%"
                                muted
                            />
                        </div>

                        <div className = "video-container-media">
                            <ReactPlayer
                                id = "react-player"
                                playsInline
                                className='react-player'
                                url='https://player.vimeo.com/video/495055476'
                                controls="true"
                                width= "89%"
                                height="89%"
                                muted
                            />
                        </div>

                        <div className = "video-container-art">
                            <ReactPlayer
                                id = "react-player"
                                playsInline
                                className='react-player'
                                url='https://player.vimeo.com/video/492914427'
                                
                                controls="true"
                                width= "100%"
                                height="100%"
                                muted
                            />
                        </div>

                        <div className = "video-container-art">
                            <ReactPlayer
                                id = "react-player"
                                playsInline
                                className='react-player'
                                url='https://player.vimeo.com/video/492922076'
                                
                                controls="true"
                                width= "100%"
                                height="100%"
                                muted
                            />
                        </div>

                        <div className = "video-container-art">
                            <ReactPlayer
                                id = "react-player"
                                playsInline
                                className='react-player'
                                url='https://player.vimeo.com/video/492923920'
                                
                                controls="true"
                                width= "100%"
                                height="100%"
                                muted
                            />
                        </div>

                        <div className = "video-container">
                            <ReactPlayer
                                id = "react-player"
                                playsInline
                                className='react-player'
                                url='https://player.vimeo.com/video/331350332'
                                
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

export default Media;
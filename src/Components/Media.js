import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import { HashLink as Link } from 'react-router-hash-link';

class Media extends Component {
    state = {
        opacity: '1'
    }
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
                                A selection of projects/visuals I have produced with either TouchDesigner, GLSL, openFrameworks, or with
                                Avidemux. Currently, I'm working towards becoming adept in TouchDesigner in efforts
                                to produce emotionally evoking and beautiful, real-time experiences.
                                <br></br>
                                <br></br>
                                More information regarding a specific visual can be found on the Vimeo link.
                        
                            </p>
                        </div>
                    </div>
                  
                    <div className = "project-image-container">
                        <div className="scroll-container">
                            <span>Scroll for more</span>
                        </div>
                    

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

                        <div className = "video-container-media2">
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
                                url='https://player.vimeo.com/video/502245691'
                                
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
                                url='https://player.vimeo.com/video/495610503'
                                
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

                        <div className = "video-container-art2">
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

                        <div className = "video-container-media3">
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

                        <div className = "video-container-media4">
                            <ReactPlayer
                                id = "react-player"
                                playsInline
                                className='react-player'
                                url='https://player.vimeo.com/video/495325909'
                                
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
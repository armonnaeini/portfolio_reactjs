import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import { HashLink as Link } from 'react-router-hash-link';


class Body extends Component {
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
                            <h1 className = "project-header">Body</h1>
                            <h2 className = "project-sub-header">C++, OpenGL, openFrameworks, UX, Interactive Installations</h2>
                            <p className = "project-blurb">
                                Body is an interactive, motion tracking project I developed using openFrameworks,
                                a C++ creative toolkit. The project utilizes an Xbox 360’s Kinect V1 camera for depth-sensing information
                                as well as the OpenCV, and can be set up as an interactive installation. Body tracks the
                                subject’s movements, and displays a silhouette of the body on either a digital display or projection. As
                                the subject moves around the project space, a trail of their silhouette is left behind, all shown real
                                time on the display.<br></br><br></br>Body was comissioned as an interactive installation
                                for the University of Colorado Boulder’s Open Access Week, as well as Wonder Wonder Boulder, an 
                                experiential arts museum.
                            </p>
                        </div>
                    </div>
                  
                    <div className = "project-image-container">
                        <div className = "video-container">
                            <ReactPlayer
                                id = "react-player"
                                playsInline
                                className='react-player'
                                url='https://player.vimeo.com/video/385177276'
                                playing
                                controls="true"
                                width= "90%"
                                height="90%"
                                muted
                            />
                        </div>
                        <div className = "video-container">
                            <ReactPlayer
                                id = "react-player"
                                playsInline
                                className='react-player'
                                url='https://player.vimeo.com/video/380535086'
                                
                                controls="true"
                                width= "90%"
                                height="90%"
                                muted
                            />
                        </div>

                        <div className = "img-container">
                            <img src ="https://i.imgur.com/sHR0gnb.jpg" href="img1" className = "responsive-image"/>
                        </div>

                        <div className = "img-container">
                            <img src ="https://i.imgur.com/QQbEOwj.jpg" href="img1" className = "responsive-image"/>
                        </div>

                        <div className = "img-container">
                            <img src ="https://i.imgur.com/VomCadM.jpg" href="img1" className = "responsive-image"/>
                        </div>

                        <div className = "img-container">
                            <img src ="https://i.imgur.com/qLotXTU.jpg" href="img1" className = "responsive-image"/>
                        </div>

                </div>
            </div>
        </div>
        ); 
    }
}

export default Body;
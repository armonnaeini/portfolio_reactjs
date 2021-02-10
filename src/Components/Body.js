import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import { HashLink as Link } from 'react-router-hash-link';


function myFunction() {

var elmnt = document.getElementById("project-infow-wrapper");
var elmnt2 = document.getElementById("project-image-container");

elmnt2.scroll = elmnt.scroll;

}

class Body extends Component {
   

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
                                Body is an interactive, motion tracking installation I developed using openFrameworks,
                                a C++ creative toolkit.
                                Body tracks a viewer's movement, using an Xbox 360's Kinect camera, within the space of the installation.
                                As a viewer moves around, their silhouttte is trailed and colorfully displayed back to the themself.
                                <br></br><br></br>Body was comissioned as an interactive installation
                                for the University of Colorado Boulder’s Open Access Week, as well as Wonder Wonder Boulder, an 
                                experiential arts museum. <br></br><br></br>Definitely the work I'm most proud of.
                            </p>
                        </div>
                    </div>
                  
                    <div className = "project-image-container">
                    <div className="scroll-container">
                            <span>Scroll me for more</span>
                        </div>
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
import React, { Component } from 'react';

class About extends Component {
    state = {};
    render() {
        return(
            <div className = "about-section" id = "about">
                <div className = "about-wrapper">
                    <div className = "title-container">
                        <div className = "title-h">
                            <h1>Who I am</h1>
                        </div>
                        <div className = "title-h">
                            <h1>What I do</h1>
                        </div>
                        <div className = "title-h">
                            <h1>What I know</h1>
                        </div>
                    </div>
                    <div className = "blurb-container">
                        <div className = "blurb-p">
                            <p>I am a designer, developer and most importantly a creative technologist. I 
                                combine my passion for art and design with my skills in software/hardware 
                                engineering to produce meaningful experiences across a diverse range of media. 
                                Simply put, I am a creator with a lot of tricks/tools up my sleeve. Using a 
                                multitude of technologies as wella s both sides of my brain, I able to create 
                                digital/physical solutions as well as artistic and entertaining expereinces. 
                                As a side gig, I’m also a fashion designer; it’s fun stuff, you can find out 
                                more in the work section below. 
                            </p>
                        </div>
                        <div className = "blurb-p">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                                veniam, quis nostrud exercitation.
                            </p>
                        </div>
                        <div className = "blurb-p">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                                veniam, quis nostrud exercitation.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        ); 
    }
}

export default About;
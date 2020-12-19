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
                            <p> Yo... okay hear me out. It's difficult for me to concisely define what I am, but I stick with 
                                'representing' myself as a  designer/developer hybrid and a multimedia artist. My work 
                                revolves around combining my passion and skillset in experiential design, art, and engineering to produce 
                                meaningful experiences for a diverse range of media. At the end of the day, I'm simply a creator. 
                                I like to produce things for others to experience. Using a multitude of technologies as well
                                 as both sides of my brain, I able to create 
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
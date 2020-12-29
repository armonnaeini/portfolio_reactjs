import React, {Component} from 'react';
import { Link } from 'react-scroll';



class NavBar extends Component {

    render() {
        return (
            <div className = "nav-wrapper">

                <div className = "nav-bar-mobile">

                    <div className = "link-container">
                        <Link
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={1000}
                        >Home</Link>
                    </div>
                    <div className = "link-container">
                    <Link
                            activeClass="active"
                            to="about-section-mobile"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={1000}
                        >About</Link>
                    </div>
                    <div className = "link-container">
                    <Link
                        activeClass="active"
                        to="work-section"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={1000}
                    >Work</Link>
                    </div>
                    
                    <div className = "link-container">
                        <Link
                            activeClass="active"
                            to="contact-section"
                            spy={true}
                            smooth={true}
                            offset={500}
                            duration={1000}
                        >Contact</Link> 
                    </div>
                    
                </div>
                    
                <div className = "nav-bar-safari">
                <div className = "link-container">
                        <Link
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={1000}
                        >Home</Link>
                    </div>
                    <div className = "link-container-about-nonmobile">
                        <Link
                                activeClass="active"
                                to="about-section"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={1000}
                            >About</Link>
                    </div>
                    <div className = "link-container-about-mobile">
                        <Link
                                activeClass="active"
                                to="about-section-mobile"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={1000}
                            >About</Link>
                    </div>
                    <div className = "link-container">
                        <Link
                            activeClass="active"
                            to="work-section"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={1000}
                        >Work</Link>
                    </div>
                    <div className = "link-container">
                        <Link
                            activeClass="active"
                            to="contact-section"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={1000}
                        >Contact</Link> 
                    </div>
                </div>
                <div className = "nav-bar">
                    <div className = "link-container">
                        <Link
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={1000}
                        >Home</Link>
                    </div>
                    <div className = "link-container">
                        <Link
                                activeClass="active"
                                to="about-section"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={1000}
                            >About</Link>
                    </div>
                    <div className = "link-container">
                        <Link
                            activeClass="active"
                            to="work-section"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={1000}
                        >Work</Link>
                    </div>
                    <div className = "link-container">
                        <Link
                            activeClass="active"
                            to="contact-section"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={1000}
                        >Contact</Link> 
                    </div>
                </div>
            </div>
            
        );
    }
}

export default NavBar;
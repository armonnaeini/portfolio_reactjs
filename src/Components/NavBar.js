import React, {Component} from 'react';
// import { Link, Element } from 'react-scroll';
import { HashLink as Link } from 'react-router-hash-link';
import { NavHashLink as NavLink } from 'react-router-hash-link';

class NavBar extends Component {
    state = {};
    render() {
        return (
            <div className = "nav-bar">
                <ul>
                    
                    <Link smooth to="/#home">Home</Link>
                    {/* <Link
                        activeClass="active"
                        to="home-section"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={1000}
                    >Home</Link>
                   <Link
                        activeClass="active"
                        to="about-section"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={1000}
                    >About</Link>
                    <Link
                        activeClass="active"
                        to="work-section"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={1000}
                    >Work</Link>
                    <Link
                        activeClass="active"
                        to="contact-section"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={1000}
                    >Contact</Link> */}
                </ul>
            </div>
        );
    }
}

export default NavBar;
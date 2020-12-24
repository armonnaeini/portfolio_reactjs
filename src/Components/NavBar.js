import React, {Component} from 'react';
import { Link, Element } from 'react-scroll';

class NavBar extends Component {
    state = {};
    render() {
        return (
            <div className = "nav-bar">
                <ul>
                  
                    {/* <NavLink smooth activeClassName="active" to="/#home" location={{pathname: document.location.pathname + document.location.hash}}>Home</NavLink>
                    <NavLink smooth to ="/#about" activeClass="active">About</NavLink> */}
                    
                    <Link
                        activeClass="active"
                        to="home"
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
                        offset={500}
                        duration={1000}
                    >Contact</Link> 
                </ul>
            </div>
        );
    }
}

export default NavBar;
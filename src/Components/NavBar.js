import React, {Component} from 'react';
import { Link } from 'react-scroll';

class NavBar extends Component {
    state = {};
    render() {
        return (
            <div className = "nav-bar">
                <ul>
                    <Link
    activeClass="active"
    to="section1"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
></Link>
                    <li>Home</li>
                    <li>About</li>
                    <li>Work</li>
                    <li>Contact</li>
                </ul>
            </div>
        );
    }
}

export default NavBar;
import React, {Component} from 'react';
import { Link } from 'react-scroll';

class NavBar extends Component {
    state = {};
    render() {
        return (
            <div className = "nav-bar">
                <ul>
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
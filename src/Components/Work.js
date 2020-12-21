import React, { Component } from 'react';
import gsap from "gsap";
import Body from './Body';
import { HashLink as Link } from 'react-router-hash-link';

class Work extends Component {
    state = {};
    
    componentDidMount() {
        console.log("component, mounted");
        
        const projects = document.querySelectorAll('.project');
        console.log(projects.length);

        projects.forEach((el) => {

            const image = el.querySelector('img')
            el.addEventListener('mouseenter', (e) => {
              gsap.to(image, { autoAlpha: 1 });
              console.log("enter");
            })
            
             el.addEventListener('mouseleave', (e) => {
              gsap.to(image, { autoAlpha: 0 });
              
            })
            
            el.addEventListener('mousemove', (e) => {
              gsap.set(image, { x: e.offsetX -600,
                                y: e.offsetY });
            })
          })
      }
      
    render() {
        
        return(
            <div className = "work-section" id = "work">
    
                <div className = "work-wrapper">
                    <div className = "work-title">
                        <h1>Select projects of mine</h1>
                        <p>You dig?</p>
                    </div>

                    <div className = "work-list-container">
                        <ul>

                            
                            <Link to ="/body">
                                <li className = "project">
                                    <img alt = "ahh" className = "hover-img" src="https://i.imgur.com/sHR0gnb.jpg"/>Body
                                </li>
                            </Link>

                            <Link to ='/filters'>
                                <li className = "project">
                                    <img alt = "ahh" className = "hover-img" src="https://i.imgur.com/EfDrViK.png"/>Face Filters
                                </li>
                            </Link>

                            <Link to ="/numbers">
                                <li className = "project">
                                    <img alt = "ahh" className = "hover-img" src="https://i.imgur.com/4ToqtZf.png"/>Arbitrary Numbers
                                </li>
                            </Link>
                                
                            <Link to='/media'>
                                <li className = "project">
                                    <img alt = "ahh" className = "hover-img" src="https://i.imgur.com/iMSpmeq.png"/>New Media Art
                                </li>
                            </Link>

                            <Link to="/fuego">
                                <li className = "project">
                                    <img alt = "ahh" className = "hover-img" src="https://i.imgur.com/sumJLiB.png"/>FuegoUX
                                </li>
                            </Link>
                            
                            <Link to ='/meow'>
                                <li className = "project">
                                    <img alt = "ahh" className = "hover-img" src="https://i.imgur.com/J0Z57ra.png"/> Meow Wolf
                                </li>
                            </Link>

                            <Link to ='/sher'>
                                <li className = "project">
                                    <img alt = "ahh" className = "hover-img" src="https://i.imgur.com/nlYJMNn.png"/>Sher Edling
                                </li>
                            </Link>

                            <Link to ='/giide'>
                                <li className = "project">
                                    <img alt = "ahh" className = "hover-img" src="https://i.imgur.com/RnkziOc.png"/>Giide
                                </li>
                            </Link>
                            
                            <Link to ='/pfa'>
                                <li className = "project">
                                    <img alt = "ahh" className = "hover-img" src="https://i.imgur.com/LdeNYvL.png"/>putphoneaway
                                </li>
                            </Link>

                            <Link to ='/mosh'>
                                <li className = "project">
                                    <img alt = "ahh" className = "hover-img" src="https://i.imgur.com/LdeNYvL.png"/>Datamoshing
                                </li>
                            </Link>

                            {/* <li className = "project">Typography</li> */}
                        </ul>
                    </div>
                </div>

             
               
            </div>
        ); 
    }
}

export default Work;
import React, { Component, Fragment } from 'react';
import * as THREE from "three";
import gsap from "gsap";
import { HashLink as Link } from 'react-router-hash-link';
import { noise } from './noise';

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
var theta2 = 0.01;

class ThreeScene extends Component{
    componentDidMount(){
        const width = this.mount.clientWidth
        const height = this.mount.clientHeight
        //ADD SCENE
        this.scene = new THREE.Scene()
        //ADD CAMERA
        this.camera = new THREE.PerspectiveCamera(
            45,
            window.innerWidth/window.innerHeight,
            0.1,
            1000
        )

        this.camera.position.z = 2.9;
        this.camera.position.x = .25;
        //ADD RENDERER
        this.renderer = new THREE.WebGLRenderer({ antialias: true })
        // this.renderer = new THREE.WebGLRenderer({ canvas : document.getElementById('canvas'), antialias:false});

        this.renderer.setClearColor('#ffffff')
        this.renderer.setPixelRatio(window.devicePixelRatio);

        this.renderer.setSize(width, height)
        this.mount.appendChild(this.renderer.domElement)


        var c = document.createElement("canvas");
        c.width = 32;
        c.height = 32;
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0, 32, 32);
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(32, 32, 32, 0, 2 * Math.PI);
        ctx.fill();
        var tex = new THREE.CanvasTexture(c);
        const material2 = new THREE.PointsMaterial({ color: 0x3d403d, size: .004,map: tex,  alphaMap: tex,
        alphaTest: .5});

        var params = {
            radius: 50,
            tube:20,
            radialSegments: 200, //lower this for optimizing
            tubularSegments: 150,
            p: 100, // shape
            q: 111, // shape
            heightScale: 0
        };

        const geometry = new THREE.TorusKnotGeometry(
            params.radius,
            params.tube,
            params.radialSegments,
            params.tubularSegments,
            params.p,
            params.q,
            params.heightScale
        );

        this.sphere = new THREE.Points(geometry, material2);
        this.scene.add(this.sphere);

        this.start()
        const projects = document.querySelectorAll('.project');

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

    onWindowResize = () => {
        this.camera.aspect = window.innerWidth/ window.innerHeight;
		this.camera.updateProjectionMatrix();
        this.renderer.setSize( this.mount.clientWidth, this.mount.clientHeight );     
    }

    componentWillUnmount(){
        this.stop()
        this.mount.removeChild(this.renderer.domElement)
    }

    start = () => {
        if (!this.frameId) {
            this.frameId = requestAnimationFrame(this.animate)
        }
    }

    stop = () => {
        cancelAnimationFrame(this.frameId)
    }

    update = () => {
         // change '0.003' for more aggressive animation
         const time = performance.now() * 0.00025;
         // change 'k' value for more spikes
         const k = 2.25
         for (var i = 0; i < this.sphere.geometry.vertices.length; i+=1) {
             const p = this.sphere.geometry.vertices[i];
             p.normalize().multiplyScalar(.9 + .35 * noise.perlin3(p.x * k - time, p.y * k, p.z* k/2));
         }
        //  this.sphere.geometry.computeVertexNormals();
        //  this.sphere.geometry.normalsNeedUpdate = true;
         this.sphere.geometry.verticesNeedUpdate = true;
        //  var container = document.getElementById('container');
        //  this.renderer.setSize(container.width(), container.height());

         this.onWindowResize();
    }

    animate = () => {
        this.sphere.rotation.x += 0.001
        this.sphere.rotation.y += 0.001
        this.update()
        this.renderScene()
        this.frameId = window.requestAnimationFrame(this.animate)
    }

    renderScene = () => {
        this.renderer.render(this.scene, this.camera)
    }


  render(){
      return(
              <div id = "canvas" style={{ width: '85%', height: '80%' }}
          ref={(mount) => { this.mount = mount }}
        />
        
      )
    }
  }

class Hover extends Component {

}


class Home extends Component {
    
    render() {
       
        return(
            <Fragment>
                <div className = "home-wrapper" id = "home">

                    <div className = "home-section">

                        <div className = "header-container">
                            <h1>A digital daydream.</h1>
                            <h3>Howdy, my name is Armon Naeini. Welcome to my personal portfolio.</h3>
                        </div>
                        
                        <div className  = "cc">

                            <ThreeScene/>

                        </div>
                        <div className ="underline">
                            <div className= "line"></div>
                        </div>

                    </div>
                </div>

                <div className = "about-section-mobile">
                    <div className = "title-container">
                        <div className = "title-h">
                            <h1>Who I am</h1>
                            <div className = "blurb-p">
                                <p>

                                    I am a creative technologist and multimedia producer. I strive to combine computer science with art + design
                                    to produce experiences, solutions and artistic expressions across a variety of media. Self-expression
                                    is an extremely important concept to me, and I've learned to manifest the trait into the work that I design
                                    and develop.
                                    
                                </p>
                            </div>
                        </div>
                        <div className = "title-h">
                            <h1>What I do</h1>
                                <div className = "blurb-p">
                                    <p>
                                        UX design for web, mobile and AR<br></br>
                                        Front-end web development<br></br>
                                        AR development + experimentation<br></br>
                                        Interactive installation design + development<br></br>
                                        Generative visual development<br></br>
                                        Graphic design + animation
                                    </p>
                                </div>
                        </div>
                        <div className = "title-h">
                            <h1>What I know</h1>
                                <div className = "blurb-p">
                                    <p><span>Design*</span><br></br>
                                        Full Adove Creative Suite, Sketch, Figma, InVision, Blender, Avidemux;), SparkAR
                                        <br></br><br></br>
                                        <span>Development {">"}_</span>
                                        <br></br>
                                        HTML, CSS, JS, ReactJS (I built this site with React), Three.js, C++, openFrameworks, 
                                        OpenGL, GLSL, TouchDesigner, Python, Arduino, Processing
                                    </p>
                                </div>
                            </div>
                    </div>
                </div>

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
                                <p>
                                    I am a creative technologist and multimedia producer. I strive to combine computer science with art + design
                                    to produce experiences, solutions and artistic expressions across a variety of media. Self-expression
                                    is an extremely important concept to me, and I've learned to manifest the trait into the work that I design
                                    and develop.<br></br>
                                    <div>
                                        <a href = "https://vimeo.com/385177276">Learn a little bit more about me.</a>
                                    </div>
                                </p>
                            </div>

                            <div className = "blurb-p">
                                <p>
                                    UX design for web, mobile and AR<br></br>
                                    Front-end web development<br></br>
                                    AR development + experimentation<br></br>
                                    Interactive installation design + development<br></br>
                                    Generative visual development<br></br>
                                    Graphic design + animation

                                </p>
                            </div>
                            <div className = "blurb-p">
                                <p><span>Design*</span><br></br>
                                    Full Adove Creative Suite, Sketch, Figma, InVision, Blender, Avidemux;), SparkAR
                                    <br></br><br></br>
                                    <span>Development {">"}_</span>
                                    <br></br>
                                    HTML, CSS, JS, ReactJS (I built this site with React), Three.js, C++, openFrameworks, 
                                    OpenGL, GLSL, TouchDesigner, Python, Arduino, Processing
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
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
                                    <img alt = "ahh" className = "hover-img" src="https://i.imgur.com/sHR0gnb.jpg"/>
                                  Body
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
                                <li className = "project ">
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
                                    <img alt = "ahh" className = "hover-img" src="https://i.imgur.com/IKwRqsi.png"/>Typography
                                </li>
                            </Link>

                        </ul>
                    </div>
                </div>

                <div className = "contact-section" id = "contact">
                <div className="header-container">
                <h1>Get in touch with me.</h1>
                <p>Let's make something cool together.</p>
                </div>

                <div className = "contact-container">
                    <a href="mailto:work@armonnn.com">
                        <h1 >EMAIL</h1>
                    </a>
                    <a href = "https://www.linkedin.com/in/armonnaeini/" target="_blank">
                        <h1>LINKEDIN</h1>
                    </a>
                    <a href = "https://www.instagram.com/underscore_armon/" target="_blank">
                        <h1>INSTAGRAM</h1>
                    </a>
                    <h1>VIMEO</h1>
                </div>
            </div>
               
            </div>
            </Fragment>
            
        ); 
    }
}

export default Home;
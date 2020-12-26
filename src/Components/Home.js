import React, { Component, Fragment } from 'react';
import * as THREE from "three";
import gsap from "gsap";
import { HashLink as Link } from 'react-router-hash-link';
import { noise } from './noise';

/*
class ThreeScene extends Component{

    componentDidMount(){
        const width = this.mount.clientWidth;
        const height = this.mount.clientHeight;
        let renderer = new THREE.WebGLRenderer({ antialias: true });

        // const renderer = new THREE.WebGLRenderer({ canvas : document.getElementById('canvas'), antialias:false});
        renderer.setClearColor(0xffffff);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(width, height);
        this.mount.appendChild(renderer.domElement)

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera( 45, window.innerWidth/window.innerHeight, 0.1, 1000 );
        camera.position.z = 3;
        var light = new THREE.AmbientLight( 0xffffff, .1 );
        light.position.set( 0, 1, 1 ).normalize();
        scene.add(light);


        const circleTexture = new THREE.TextureLoader().load("https://threejs.org/examples/textures/sprites/disc.png");

        var c = document.createElement("canvas");
        c.width = 128;
        c.height = 128;
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0, 128, 128);
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(64, 64, 64, 0, 2 * Math.PI);
        ctx.fill();
        var tex = new THREE.CanvasTexture(c);
        let material2 = new THREE.PointsMaterial({ color: 0x3d403d, size: .005,map: tex,  alphaMap: tex,
        alphaTest: .5});

        var params = {
            radius: 100,
            tube: 28,
            radialSegments: 250, //lower this for optimizing
            tubularSegments: 100,
            p: 100, // shape
            q: 999, // shape
            heightScale: 0
        };

        var geometry = new THREE.TorusKnotGeometry(
            params.radius,
            params.tube,
            params.radialSegments,
            params.tubularSegments,
            params.p,
            params.q,
            params.heightScale
        );

        const projects = document.querySelectorAll('.project');
        console.log(projects.length);

        

        const sphere = new THREE.Points(geometry, material2);
        scene.add(sphere);
		window.addEventListener( 'resize', onWindowResize, false );

        function onWindowResize() {
			camera.aspect = window.innerWidth/ window.innerHeight;
			camera.updateProjectionMatrix();
            renderer.setSize( window.innerWidth, window.innerHeight );      
        }

        const update = function() {
            // change '0.003' for more aggressive animation
            const time = performance.now() * 0.00025;
            // change 'k' value for more spikes
            const k = 2.25
            for (var i = 0; i < sphere.geometry.vertices.length; i+=1) {
                const p = sphere.geometry.vertices[i];
                p.normalize().multiplyScalar(.8 + .35 * noise.perlin3(p.x * k - time, p.y * k, p.z* k/2));
            }
            sphere.geometry.computeVertexNormals();
            sphere.geometry.normalsNeedUpdate = true;
            sphere.geometry.verticesNeedUpdate = true;
            onWindowResize();
        }


        function animate() {
        sphere.rotation.x += 0.001;
        sphere.rotation.y += 0.001;

        update();
            renderer.render(scene,camera);
            requestAnimationFrame(animate);
        }
        animate();

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

        
      geometry.dispose();
       material2.dispose();
        // c.dispose();
    }

    componentWillUnmount(){
        this.stop()
        this.mount.removeChild(renderer.domElement)
    }

    stop = () => {
        cancelAnimationFrame(this.frameId)
    }
  
    render(){
      return(
        <div id="canvas" ref={(mount) => { this.mount = mount }} />
      )
    }
  }*/

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

        this.camera.position.z = 3.1;
        this.camera.position.x = .5;
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
        const material2 = new THREE.PointsMaterial({ color: 0x3d403d, size: .003,map: tex,  alphaMap: tex,
        alphaTest: .5});

        var params = {
            radius: 70,
            tube:20,
            radialSegments: 300, //lower this for optimizing
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
             p.normalize().multiplyScalar(.8 + .35 * noise.perlin3(p.x * k - time, p.y * k, p.z* k/2));
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
              <div id = "canvas" style={{ width: '100%', height: '100%' }}
          ref={(mount) => { this.mount = mount }}
        />
        
      )
    }
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
                                    I like to consider myself a multimedia designer and engineer, as well as a visual artist. Producing 
                                    experiences, solutions, and artistic expressions across a variety of media is truly what I am 
                                    so passionate about. Self-expression is something that I resonate with, and luckily I have been
                                    able to find a niche.
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
                                        Graphic design<br></br>
                                        2D animation
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
                                    I like to consider myself a multimedia designer and engineer, as well as a visual artist. Producing 
                                    experiences, solutions, and artistic expressions across a variety of media is truly what I am 
                                    so passionate about. Self-expression is something that I resonate with, and luckily I have been
                                    able to find a niche
                                    
                                </p>
                            </div>

                            <div className = "blurb-p">
                                <p>
                                    UX design for web, mobile and AR<br></br>
                                    Front-end web development<br></br>
                                    AR development + experimentation<br></br>
                                    Interactive installation design + development<br></br>
                                    Generative visual development<br></br>
                                    Graphic design<br></br>
                                    2D animation
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

             
               
            </div>
            </Fragment>
            
        ); 
    }
}

export default Home;
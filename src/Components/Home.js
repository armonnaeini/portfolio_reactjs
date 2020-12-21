import React, { Component } from 'react';
import * as THREE from "three";
import ReactDOM from "react-dom";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
var radius = 10, theta = 0;

class ThreeScene extends Component{

    componentDidMount(){
  
 
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
      this.renderer = new THREE.WebGLRenderer({ antialias: true });
      this.renderer.setClearColor('#1F1E20');
      this.renderer.setSize( window.innerWidth, window.innerHeight );
      this.mount.appendChild(this.renderer.domElement)
  
      const geometry = new THREE.SphereGeometry(.3,100,100, 50)
  
      //shader
      var material = new THREE.ShaderMaterial({
        uniforms: {
          color1: {
            value: new THREE.Color(0x8a2dd7) //think of uniforms as variables, interchangeable, to be adjusted through app\\\
          },
          color2: {
            value: new THREE.Color( 0xf07121 )
          }
        },
        vertexShader: `
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1); //glPosition
          }
        `,
        fragmentShader: `
          uniform vec3 color1;
          uniform vec3 color2;
          varying vec2 vUv;
          void main() {
            gl_FragColor = vec4(mix(color1, color2, vUv.x), 1); //this is the output
          }
        `,
        wireframe: false
      });
  
      for ( var i = 0; i < 100; i ++ ) {
                      var object = new THREE.Mesh( geometry,material )
                      object.position.x = (Math.random())*250-100;
                      object.position.y = (Math.random())*250-100;
                      object.position.z = (Math.random())*250-100;
                      object.rotation.x = Math.random() * 2 * Math.PI;
                      object.rotation.y = Math.random() * 2 * Math.PI;
                      object.rotation.z = Math.random() * 2 * Math.PI;
                      object.scale.x = Math.random() + 30;
                      object.scale.y = Math.random() + 40;
                      object.scale.z = Math.random() + 12;
                      this.scene.add( object );
                  }
  
      var raycaster = new THREE.Raycaster();
      this.cube = new THREE.Mesh(geometry, material)
  
      this.start()
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
  
  
  
    animate = (event) => {
  
        var time = Date.now() * 0.0006;
        this.camera.position.x = radius + Math.cos(time);
        this.camera.position.y = radius + Math.sin(time);
  
  
        this.camera.lookAt( this.scene.position );
  
      // this.cube.position.x += Math.random() * 2 - 1
  
        this.frameId = window.requestAnimationFrame(this.animate)
        this.renderScene()
  
    }
  
    renderScene = () => {
        this.renderer.render(this.scene, this.camera)
    }
  
    render(){
      return(
        <div className = "three-container"
          ref={(mount) => { this.mount = mount }}
        />
      )
    }
  }




class Home extends Component {
    
    render() {
        return(
            
            <div className = "home-wrapper" id = "home">

                <div className = "home-section">
                    <div className = "header-container">
                        <h1>I turn dreams into a digital reality.</h1>
                        <h3>Howdy. My name is Armon Naeini. Welcome to my personal site.</h3>
                    </div>
                    <div className = "canvas-container">
                    <ThreeScene/>

                        <p>canvas goes here</p>
                    </div>
                    <div className ="underline">
                        <div className= "line">a</div>
                    </div>
                </div>
            </div>
                
        ); 
    }
}

export default Home;
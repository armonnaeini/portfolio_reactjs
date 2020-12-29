import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

class Numbers extends Component {
    state = {};
    render() {
        return(
            <div className = "project-section">
              <div className = "project-wrapper">
                    <div className = "project-info-wrapper">
                        <Link to ="/">
                            <div className = "return-container">
                                <p className =" hvr-underline-from-left">Return</p>
                            </div>
                        </Link>
                        <div className = "project-info-container">
                            <h1 className = "project-header">Arbitrary Numbers</h1>
                            <h2 className = "project-sub-header">Javascript, GLSL, Fashion Design</h2>
                            <p className = "project-blurb">
                                Arbitrary Numbers is a fashion brand I started up in April of 2020. Right at the beginning of
                                Covid-19 and quarantine, I found some extra time on my hands. I decided to make a dream of mine
                                a reality; I've always wanted to create my own clothing brand, given my extreme interest in fashion design.
                                <br></br>
                                <br></br>
                                The philosophy behind Arbitrary Numbers revolves around combining art and design with code, three
                                things I am extremely passionate about. I fell in love with creative coding/computation during 
                                my undergrad career at CU Boulder, where I started to create art using various programming 
                                languages and software, such as Javscript or GLSL. I then thought to myself why I do not use
                                this practice to design clothes. Arbitrary Numbers' designs are all made/inspired with code,
                                ranging from JS to C++. The site was also custom developed by myself using Shopify and Three.js.
                                <br></br>
                                <br></br>
                                The project is small and very young, but it means the world to me. I hope to take this to the moon
                                one day.
                            </p>
                            <span className = "site-link"><a href="https://arbitrarynumbers.co/" target="_blank">Visit site</a></span>
                        </div>
                    </div>
                  
                    <div className = "project-image-container">
                        <div className = "img-container">
                            <img src ="https://i.imgur.com/wukhM8S.png" href="img1" className = "responsive-image"/>
                        </div>

                        <div className = "img-container">
                            <img src ="https://i.imgur.com/sGZ5h9i.png" href="img1" className = "responsive-image"/>
                        </div>  

                        <div className = "img-container">
                            <img src ="https://cdn.shopify.com/s/files/1/0278/4274/0310/products/A6811F7F-8C7F-4065-8B00-05CC56DCB6A6_1080x.jpg?v=1589484452" href="img1" className = "responsive-image"/>
                        </div>
                        <div className = "img-container">
                            <img src ="https://i.imgur.com/0oKJ8EM.jpg" href="img1" className = "responsive-image"/>
                        </div>  
                    </div>

            </div>
        </div>
        ); 
    }
}

export default Numbers;
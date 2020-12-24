import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

class Pfa extends Component {
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
                            <h1 className = "project-header">putphoneaway</h1>
                            <h2 className = "project-sub-header">UX Design, Web Development, Shopify</h2>
                            <p className = "project-blurb">
                                putphoneaway is a sticker company that seeks to raise awareness regarding the dangers
                                of texting and driving. I redesigned and developed their Shopify website, using custom
                                Liquid code.
                            </p>
                            <span className = "site-link"><a href="https://putphoneaway.com/" target="_blank">Visit site</a></span>

                        </div>
                    </div>
                  
                    <div className = "project-image-container">
                        <div className = "img-container">
                            <img src ="https://i.imgur.com/Ncc6Azq.png" href="img1" className = "responsive-image"/>
                        </div>
                        <div className = "img-container">
                            <img src ="https://i.imgur.com/VANe2zP.png" href="img1" className = "responsive-image"/>
                        </div>
                        
                    </div>

            </div>
        </div>
        ); 
    }
}

export default Pfa;
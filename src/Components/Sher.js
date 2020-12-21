import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class Sher extends Component {
    state = {};
    render() {
        return(
            <div className = "project-section">
              <div className = "project-wrapper">
                    <div className = "project-info-wrapper">
                        <div className = "project-info-container">
                            <h1 className = "project-header">Sher Edling LLP</h1>
                            <h2 className = "project-sub-header">UX Discovery, UX Design, Web Development</h2>
                            <p className = "project-blurb">
                                A website I recently fully re-designed and developed, while I was working at Vermilion Design + Digital.
                                Sher Edling LLP is a law firm representing states, cities, public agencies
                                and businesses in high-impact environmental cases. They approached Vermilion with a desire to completely
                                revamp their website experience, in terms of both UX and design. I led the project and transformed 
                                their old, non-intuitive experience into something much more digestable.
                            </p>
                        </div>
                    </div>
                  
                    <div className = "project-image-container">
                        <div className = "img-container">
                            <img src ="https://i.imgur.com/p78uV3S.png" href="img1" className = "responsive-image"/>
                        </div>
                        <div className = "img-container">
                            <img src ="https://i.imgur.com/wPI0cVS.jpg" href="img1" className = "responsive-image"/>
                        </div>


                        
                       

                        
                    </div>

            </div>
        </div>
        ); 
    }
}

export default Sher;
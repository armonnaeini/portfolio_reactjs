import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class Mosh extends Component {
    state = {};
    render() {
        return(
            <div className = "project-section">
              <div className = "project-wrapper">
                    <div className = "project-info-wrapper">
                        <div className = "project-info-container">
                            <h1 className = "project-header">Datamosh</h1>
                            <h2 className = "project-sub-header">Avidemux, Premiere, Destorying i and p-frames</h2>
                            <p className = "project-blurb">
                                A website I recently re-designed and developed, FuegoUX is an experiential design company
                                with an ephasis on simplicity and modernism. Fuego's new site was designed with a sense of 
                                minimalism, with a strong emphasis on both typography and iconagraphy. 
                            </p>
                        </div>
                    </div>
                  
                    <div className = "project-image-container">
                        <div className = "video-container">
                            <ReactPlayer
                                id = "react-player"
                                playsInline
                                className='react-player'
                                url='https://player.vimeo.com/video/492913417'
                                playing
                                controls="true"
                                width= "90%"
                                height="90%"
                                muted
                            />
                        </div>

                        <div className = "video-container">
                            <ReactPlayer
                                id = "react-player"
                                playsInline
                                className='react-player'
                                url='https://player.vimeo.com/video/492914427'
                                playing
                                controls="true"
                                width= "100%"
                                height="100%"
                                muted
                            />
                        </div>

                        <div className = "video-container">
                            <ReactPlayer
                                id = "react-player"
                                playsInline
                                className='react-player'
                                url='https://player.vimeo.com/video/492922076'
                                playing
                                controls="true"
                                width= "100%"
                                height="100%"
                                muted
                            />
                        </div>

                        <div className = "video-container">
                            <ReactPlayer
                                id = "react-player"
                                playsInline
                                className='react-player'
                                url='https://player.vimeo.com/video/492923920'
                                playing
                                controls="true"
                                width= "100%"
                                height="100%"
                                muted
                            />
                        </div>

                        <div className = "video-container">
                            <ReactPlayer
                                id = "react-player"
                                playsInline
                                className='react-player'
                                url='https://player.vimeo.com/video/331350332'
                                playing
                                controls="true"
                                width= "100%"
                                height="100%"
                                muted
                            />
                        </div>
                       
                    </div>

            </div>
        </div>
        ); 
    }
}

export default Mosh;
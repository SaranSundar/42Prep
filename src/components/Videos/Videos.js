import React, {Component} from 'react';
import "./Videos.css"
import Carousel from "react-bootstrap/es/Carousel";
import YouTube from 'react-youtube';


class Videos extends Component {

    state = {};

    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1
            }
        };
        return (
            <div className="Videos">
                <Carousel>
                    <Carousel.Item>
                        <img className="video-thumbnail" width={900} height={500} alt="900x500"
                             src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/13001000/Beagle-On-White-01-400x267.jpg"/>
                        <img className="video-thumbnail" width={900} height={500} alt="900x500"
                             src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/13001000/Beagle-On-White-01-400x267.jpg"/>
                        <img className="video-thumbnail" width={900} height={500} alt="900x500"
                             src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/13001000/Beagle-On-White-01-400x267.jpg"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="video-thumbnail" width={900} height={500} alt="900x500"
                             src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/13001000/Beagle-On-White-01-400x267.jpg"/>
                        <img className="video-thumbnail" width={900} height={500} alt="900x500"
                             src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/13001000/Beagle-On-White-01-400x267.jpg"/>
                        <img className="video-thumbnail" width={900} height={500} alt="900x500"
                             src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/13001000/Beagle-On-White-01-400x267.jpg"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="video-thumbnail" width={900} height={500} alt="900x500"
                             src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/13001000/Beagle-On-White-01-400x267.jpg"/>
                        <img className="video-thumbnail" width={900} height={500} alt="900x500"
                             src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/13001000/Beagle-On-White-01-400x267.jpg"/>
                        <img className="video-thumbnail" width={900} height={500} alt="900x500"
                             src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/13001000/Beagle-On-White-01-400x267.jpg"/>
                    </Carousel.Item>
                </Carousel>
                <div className="video-player">
                    <YouTube
                        videoId="2g811Eo7K8U"
                        opts={opts}
                        onReady={this._onReady}
                    />
                </div>
                <p>HERWREW EWFJEWKF OIWEFIOEWNKFNEWPIFJ EOWJFKEWFP
                    EWFJKEWNFEWFNO EWNFEWFPIOEWFPIWE OJWEFIE PWEKJFO PIJEWFNPJNEW
                    JOEFNOEWFNONWFEWO</p>
            </div>
        );
    }

    _onReady = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    };
}

export default Videos;

import React, {Component} from 'react';
import "./Videos.css"
import YouTube from 'react-youtube';


class Videos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            links: {
                urls: ["vCAW7ybBFW8", "IzhMzY5avLI", "6j7oQletFbc"],
                icons: ["https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-1.jpg", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-1.jpg", "https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&h=350"],
                names: ["Day 1", "Day 2", "Dogs"]
            },
            index: 0
        };
    }

    onVideoClick = (x) => {
        this.setState({index: x});
    };

    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1
            }
        };
        let innerVids = [];
        for (let i = 0; i < this.state.links.urls.length; i++) {
            let vid = (<div className="tile" onClick={() => {this.onVideoClick(i)}}>
                <div className="tile__media">
                    <img className="tile__img"
                         src={this.state.links.icons[i]} alt=""/>
                </div>
                <div className="tile__details">
                    <div className="tile__title">
                        {this.state.links.names[i]}
                    </div>
                </div>
            </div>);
            innerVids.push(vid);
        }
        return (
            <div className="Videos">
                <div className="container">
                    <div className="row">
                        <div className="row__inner">
                            {innerVids}
                        </div>
                    </div>
                    <div className="video-player">
                        <YouTube
                            videoId={this.state.links.urls[this.state.index]}
                            opts={opts}
                            onReady={this._onReady}
                        />
                        <textarea style={{background: "#d5fdff", color: "black"}} className="output-text-scroll" readOnly="readOnly">
                            RWFW
                            EF

                            E"Wfewl]feewf ewf
                            ;wf eew
                            few ,efewfew ew fe wf ewf
                            eqwf'f
                            ewgew gewf ewf ef ewf
                        </textarea>
                    </div>
                    <iframe onLoad={this.loadFrame} height="550px" width="100%"
                            src="https://repl.it/@sarans/TreasuredEnviousFrontend?lite=true"
                            scrolling="no" frameBorder="no"
                            allowFullScreen="true"
                            sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"/>
                </div>
            </div>
        );
    }

    _onReady = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    };
}

export default Videos;

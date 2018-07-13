import React, {Component} from 'react';
import "./Videos.css"
import YouTube from 'react-youtube';


class Videos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            links: {
                urls: ["aUqO-dgzMw4", "TfJahweD8X0", "TEHA_IwNk34", "47IS8VtAM9E", "sq6n8dL117c", "ka6cg9szUtQ", "XGxbXMP6k8k", "gBC_Fd8EE8A"],
                icons: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLKRHHd6aXMs4yswEa0bBovb6sR9Jnk21FkxtdB2ze-JbkxfP4", "https://i0.wp.com/codeexercise.com/wp-content/uploads/2016/11/WHILE-Loops-statement.gif", "https://www.studytonight.com/c/images/functions-and-arguments.gif", "https://image.slidesharecdn.com/pointerincppt1-170205042520/95/pointer-in-c-program-4-638.jpg?cb=1486269484", "https://overiq.com/uploads/character-pointer-and-string-literal-1504599248003.png", "https://i.ytimg.com/vi/aGq0wkrphM8/maxresdefault.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRndDQoCuCA_DDWpbXHQx7B58-ItlEeAJORdIdHiJhLIdJ-mGkw", "https://www.daniweb.com/attachments/large/3/diagram2.png"],
                names: ["Day 02 – Basic Variable Types", "Day 02 – Basic Logic & Loops", "Day 02 – Functions", "Day 03 – Pointer", "Day 03 – String ", "Day 03 – Array", "Day 04 – Recursion", "Day 04 – Backtracking"]
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
            let vid = (<div className="tile" onClick={() => {
                this.onVideoClick(i)
            }}>
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

                        {/*<HelperText/>*/}
                        <div className="image-container">
                            <img src={"./day" + (this.state.index + 1) + ".jpeg"} className="image-output"/>
                        </div>
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

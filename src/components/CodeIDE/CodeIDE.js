import React, {Component} from 'react';
import "./CodeIDE.css"

class CodeIDE extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loaded: false
        };
    }

    componentDidMount() {
        // setTimeout(() => {
        //     this.loadFrame();
        // }, 3000);
    }


    loadFrame = () => {
        this.setState({loaded: true});
    };

    render() {
        return (
            <div>
                {!this.state.loaded && <div id="animation">
                    <h1 className="code-title">LOADING RESOURCES...</h1>
                    <svg viewBox="0 0 124 124">
                        <polygon className="hex" fill="none" stroke="#000000"
                                 points="92,48.4575131106 92,15.542486889354095 62,2 32,15.542486889354095 32,48.4575131106"/>
                        <polygon className="hex" fill="none" stroke="#000000"
                                 points="62,94.9150262213 92,108.457513111 122,94.9150262213 122,62 92,48.4575131106"/>
                        <polygon className="hex" fill="none" stroke="#000000"
                                 points="32,48.4575131106 2,62 2,94.9150262213 32,108.457513111 62,94.9150262213"/>
                    </svg>
                </div>}
                {<iframe onLoad={this.loadFrame} height="650px" width="100%"
                         src="https://repl.it/@sarans/TreasuredEnviousFrontend?lite=true"
                         scrolling="no" frameBorder="no"
                         allowFullScreen="true"
                         sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"/>}
            </div>
        );
    }
}

export default CodeIDE;

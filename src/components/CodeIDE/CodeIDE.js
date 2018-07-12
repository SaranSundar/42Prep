import React, {Component} from 'react';
import "./CodeIDE.css"

class CodeIDE extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loaded: true
        };
    }

    loadFrame = () => {
        this.setState({loaded: true});
    };

    render() {
        return (
            <div>
                {!this.state.loaded && <h1>LOADING</h1>}
                {this.state.loaded && <iframe onLoad={this.loadFrame} height="650px" width="100%"
                                              src="https://repl.it/@sarans/TreasuredEnviousFrontend?lite=true"
                                              scrolling="no" frameBorder="no"
                                              allowFullScreen="true"
                                              sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"/>}
            </div>
        );
    }
}

export default CodeIDE;

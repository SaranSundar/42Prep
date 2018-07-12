import React, {Component} from 'react';
import "./CodeIDE.css"

class CodeIDE extends Component {

    state = {};

    render() {
        return (
            <div>
                <iframe height="800px" width="100%" src="https://repl.it/repls/TreasuredEnviousFrontend?lite=true"
                        scrolling="no" frameBorder="no" allowTransparency="true" allowFullScreen="true"
                        sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"/>
            </div>
        );
    }
}

export default CodeIDE;

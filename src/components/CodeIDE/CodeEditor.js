import React, {Component} from 'react';

class CodeEditor extends Component {

    componentDidMount() {
        this.refs.iframe.getDOMNode().addEventListener('load', this.props.onLoad);
    }


    render() {
        return <iframe ref="iframe" {...this.props}/>;
    }
}

export default CodeEditor;

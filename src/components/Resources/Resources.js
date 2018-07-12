import React, {Component} from 'react';
import "./Resources.css"

class Resources extends Component {

    state = {};

    render() {
        return (
            <div className="Resources">
                <a href="https://www.tutorialspoint.com/cprogramming/" target="_blank" rel="noopener noreferrer">Tutorials Point</a>
                <p>Here you can simple and easy to understand examples over the absolute fundamentals such as variables,
                    loops, functions and much more.</p>
                <a href="https://stackoverflow.com/" target="_blank" rel="noopener noreferrer">Stack Overflow</a>
                <p>The Holy Grail for any coder, here you can find the answer to just about any question you might ever
                    have about code concepts,
                    why your code doesnt work, how to code certain problems, and so much more.
                    Always google when stuck, type (Your question) stackoverflow c in google to find your answers.</p>
            </div>
        );
    }
}

export default Resources;

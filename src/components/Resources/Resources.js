import React, {Component} from 'react';
import "./Resources.css"

class Resources extends Component {

    state = {};

    render() {
        return (
            <div className="Resources">
                <a className="resource-title" href="https://www.tutorialspoint.com/cprogramming/" target="_blank" rel="noopener noreferrer"><u>Tutorials
                    Point</u></a>
                <p className="resource-details">Here you can simple and easy to understand examples over the absolute fundamentals such as variables,
                    loops, functions and much more.</p>
                <a className="resource-title" href="https://stackoverflow.com/questions/tagged/c?sort=newest&pageSize=15" target="_blank" rel="noopener noreferrer"><u>Stack Overflow</u></a>
                <p className="resource-details">The Holy Grail for any coder, here you can find the answer to just about any question you might ever
                    have about code concepts,
                    why your code doesnt work, how to code certain problems, and so much more.
                    Always google when stuck, type (Your question) stackoverflow c in google to find your answers.</p>
            </div>
        );
    }
}

export default Resources;

import React, {Component, Fragment} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import Home from "../Home/Home";
import NavBar from "../NavBar/NavBar";
import CodeIDE from "../CodeIDE/CodeIDE";
import Resources from "../Resources/Resources";

class App extends Component {
    render() {
        return (
            <Fragment>
                <NavBar/>
                <Switch>
                    <Route path="/Code" exact component={CodeIDE}/>
                    <Route path="/Resources" exact component={Resources}/>
                    <Route path="/" exact component={Home}/>
                    <Redirect to="/"/>
                </Switch>
            </Fragment>
        );
    }
}

export default App;

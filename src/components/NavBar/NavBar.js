import React, {Component} from 'react';
import {Link, NavLink} from "react-router-dom";
import LOGO from "./42logo.svg"
import "./NavBar.css"

class NavBar extends Component {


    render() {
        return (
            <div className="NavBar card card-1">
                <header>
                    <nav id="menuToggle">
                        <input type="checkbox"/>
                        <span/>
                        <span/>
                        <span/>
                        <ul id="menu">
                            <Link to="/">
                                <li>
                                    <img src={LOGO}/>
                                </li>
                            </Link>
                            {/*<Link to="/About">*/}
                            {/*<li>ABOUT</li>*/}
                            {/*</Link>*/}
                            <NavLink activeClassName={"selected"} exact={true} to="/">
                                <li>HOME</li>
                            </NavLink>
                            <NavLink activeClassName={"selected"} exact={true} to="/Videos">
                                <li>VIDEOS</li>
                            </NavLink>
                            <NavLink activeClassName={"selected"} exact={true} to="/Code">
                                <li>CODE</li>
                            </NavLink>
                            <NavLink activeClassName={"selected"} exact={true} to="/Resources">
                                <li>Resources</li>
                            </NavLink>
                            {/*<div className="rightSide">*/}
                            {/*<Link to="/Cart">*/}
                            {/*<li>*/}
                            {/*<i className="fas fa-shopping-cart logo"></i>*/}
                            {/*</li>*/}
                            {/*</Link>*/}
                            {/*</div>*/}
                        </ul>
                    </nav>
                </header>
            </div>
        );
    }
}


export default NavBar;
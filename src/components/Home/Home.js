import React, {Component} from 'react';
import "./Home.css"
import SliderImage from "../SliderImage/SliderImage";

class Home extends Component {

    state = {};

    render() {
        return (
            <div className="">
                <SliderImage imgURL="bg.jpg"/>
                <div className="">
                    <span className="hero-text container has-text-centered">
                        <p className="mobile-text title has-text-white is-size-2-desktop animated fadeInDownBig">
                        Welcome to 42 Prep, your one stop guide for surviving and
                            staying afloat during the piscine.
                        </p>
                        <p className="mobile-text title has-text-white is-size-3-desktop animated fadeInUpBig">
                            Here you can find detailed videos and explanations and get
                            help for your questions.
                        </p>
                    </span>
                </div>
            </div>
        );
    }
}

export default Home;

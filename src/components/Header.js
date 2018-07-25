import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Header extends Component {

    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="#">John Doe</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">

                        <ul className="navbar-nav ml-md-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">How it works <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Calendar <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Portfolio</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}

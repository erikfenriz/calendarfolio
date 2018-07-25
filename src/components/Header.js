import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Header extends Component {

    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand icon" href="#"><span className="i-circle">ER</span></a>
                    <a className="navbar-brand title" href="#">Erik Rybalkin</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">

                        <ul className="navbar-nav ml-md-auto">
                            <li className="nav-item active">
                                <Link className="nav-link active" to="/">How it works <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/calendar">Calendar <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact us</Link>
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

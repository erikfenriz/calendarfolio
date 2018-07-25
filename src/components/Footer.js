import React, {Component} from 'react';
// import {Link} from 'react-router-dom';

export default class Footer extends Component {

    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <span className="text-muted">&copy;2018 Something.</span>




                    <span className="text-muted muted-nav">Contact</span>
                    <span className="text-muted muted-nav">Help</span>
                    <span className="text-muted muted-nav">Status</span>
                    <span className="text-muted muted-nav">Security</span>
                    <span className="text-muted muted-nav">Privacy</span>
                    <span className="text-muted muted-nav">Terms</span>
                </div>
            </footer>
        )
    }
}

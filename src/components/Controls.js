import React, {Component} from 'react';

export default class Controls extends Component {
    render() {
        return (
            <button onClick={this.props.makeThemRun} className="button">GO</button>
        )
    }
}
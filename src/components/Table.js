import React, {PureComponent} from 'react';


export default class Table extends PureComponent {
    state = {
        runner: [],
        time: []
    };

    componentWillReceiveProps(nextProps) {
        this.setState({runner: nextProps.data.runner, time: nextProps.data.time});
    };

    render() {

        return (
            <table>
                <tbody>
                <tr>
                    <th>#</th>
                    <th>Runner</th>
                </tr>
                <tr>
                    <td>1st</td>
                    <td>{this.state.runner[0]}</td>
                </tr>
                <tr>
                    <td>2nd</td>
                    <td>{this.state.runner[1]}</td>
                </tr>
                <tr>
                    <td>3rd</td>
                    <td>{this.state.runner[2]}</td>
                </tr>
                <tr>
                    <td>4th</td>
                    <td>{this.state.runner[3]}</td>
                </tr>
                <tr>
                    <td>5th</td>
                    <td>{this.state.runner[4]}</td>
                </tr>
                <tr>
                    <td>6th</td>
                    <td>{this.state.runner[5]}</td>
                </tr>
                <tr>
                    <td>7th</td>
                    <td>{this.state.runner[6]}</td>
                </tr>
                <tr>
                    <td>8th</td>
                    <td>{this.state.runner[7]}</td>
                </tr>
                </tbody>
            </table>
        )
    }
}
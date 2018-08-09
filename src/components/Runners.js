import React, {Component} from 'react';
import worker from '../img/runner1.png';
import mario from '../img/runner2.png';
import sonic from '../img/runner3.png';
import flash from '../img/runner4.png';
import carpet from '../img/runner5.png';
import pacman from '../img/runner6.png';
import kabal from '../img/runner7.png';
import olympics from '../img/runner8.png';

export default class Runners extends Component {

    render() {
        return (
            <header>
                <main>
                    <div className="runLine">
                        <img className="runLine__runner" src={worker} alt="a line for runners"/>
                        <img className="runLine__runner" src={mario} alt="a line for runners"/>
                        <img className="runLine__runner" src={sonic} alt="a line for runners"/>
                        <img className="runLine__runner" src={flash} alt="a line for runners"/>
                        <img className="runLine__runner" src={carpet} alt="a line for runners"/>
                        <img className="runLine__runner" src={pacman} alt="a line for runners"/>
                        <img className="runLine__runner" src={kabal} alt="a line for runners"/>
                        <img className="runLine__runner" src={olympics} alt="a line for runners"/>
                    </div>

                </main>
            </header>
        )
    }
}

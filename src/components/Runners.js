import React, {Component} from 'react';
import worker from '../img/runner1.png';
import mario from '../img/runner2.png';
import sonic from '../img/runner3.png';
import flash from '../img/runner4.png';
import carpet from '../img/runner5.png';
import pacman from '../img/runner6.png';
import kabal from '../img/runner7.png';
import olympics from '../img/runner8.png';
// import Table from "./Table";
import Controls from "./Controls";

import $ from 'jquery';

export default class Runners extends Component {

    state = {
        runner: [],
        time: []
    };

    worker = React.createRef();
    mario = React.createRef();
    sonic = React.createRef();
    flash = React.createRef();
    carpet = React.createRef();
    pacman = React.createRef();
    kabal = React.createRef();
    olympics = React.createRef();
    track = React.createRef();

    makeThemRun = e => {
        // variable setup
        e.stopPropagation();
        const timer = 1500;
        let runner = [];
        let time = [];
        let place = $('.place');
        // reset
        for (let i = 0; i <= 7; i++) {
            place[i].innerHTML = '';
        }
        $('.track__runner').css('left', '0');

        let workerWidth,
            marioWidth,
            sonicWidth,
            flashWidth,
            carpetWidth,
            pacmanWidth,
            kabalWidth,
            olympicsWidth,
            trackWidth,
            workerTrack,
            marioTrack,
            sonicTrack,
            flashTrack,
            carpetTrack,
            pacmanTrack,
            kabalTrack,
            olympicsTrack;

        //main width for all the objects
        workerWidth = this.worker.current.width;
        marioWidth = this.mario.current.width;
        sonicWidth = this.sonic.current.width;
        flashWidth = this.flash.current.width;
        carpetWidth = this.carpet.current.width;
        pacmanWidth = this.pacman.current.width;
        kabalWidth = this.kabal.current.width;
        olympicsWidth = this.olympics.current.width;
        trackWidth = this.track.current.offsetWidth;

        // each runner's track width according to its width
        workerTrack = trackWidth - workerWidth;
        marioTrack = trackWidth - marioWidth;
        sonicTrack = trackWidth - sonicWidth;
        flashTrack = trackWidth - flashWidth;
        carpetTrack = trackWidth - carpetWidth;
        pacmanTrack = trackWidth - pacmanWidth;
        kabalTrack = trackWidth - kabalWidth;
        olympicsTrack = trackWidth - olympicsWidth;

        // get random speed for each runner

        const timer1 = Math.floor((Math.random() * timer) + 1);
        const timer2 = Math.floor((Math.random() * timer) + 1);
        const timer3 = Math.floor((Math.random() * timer) + 1);
        const timer4 = Math.floor((Math.random() * timer) + 1);
        const timer5 = Math.floor((Math.random() * timer) + 1);
        const timer6 = Math.floor((Math.random() * timer) + 1);
        const timer7 = Math.floor((Math.random() * timer) + 1);
        const timer8 = Math.floor((Math.random() * timer) + 1);


        $('#worker').animate({
            left: workerTrack
        }, timer1, function () {
            runner.push('Worker');
            time.push(timer1);
            placement(place, runner, time);
        });
        $('#mario').animate({
            left: marioTrack
        }, timer2, function () {
            runner.push('Mario');
            time.push(timer2);
            placement(place, runner, time);
        });
        $('#sonic').animate({
            left: sonicTrack
        }, timer3, function () {
            runner.push('Sonic the Hedgehog');
            time.push(timer3);
            placement(place, runner, time);
        });
        $('#flash').animate({
            left: flashTrack
        }, timer4, function () {
            runner.push('Flash');
            time.push(timer4);
            placement(place, runner, time);
        });
        $('#carpet').animate({
            left: carpetTrack
        }, timer5, function () {
            runner.push('Magic Carpet');
            time.push(timer5);
            placement(place, runner, time);
        });
        $('#pacman').animate({
            left: pacmanTrack
        }, timer6, function () {
            runner.push('PacMan');
            time.push(timer6);
            placement(place, runner, time);
        });
        $('#kabal').animate({
            left: kabalTrack
        }, timer7, function () {
            runner.push('Kabal');
            time.push(timer7);
            placement(place, runner, time);
        });
        $('#olympics').animate({
            left: olympicsTrack
        }, timer8, function () {
            runner.push('Usain Bolt');
            time.push(timer8);
            placement(place, runner, time);
        });

        function placement(place, runner, time) {

            if (place[0].innerHTML === 'undefined crossed the line in undefined ms' || place[0].innerHTML === '' || place[0].innerHTML === undefined) {
                place[0].innerHTML = runner[0] + " crossed the line in " + time[0] + " ms";
            }
            if (place[1].innerHTML === 'undefined crossed the line in undefined ms' || place[1].innerHTML === '' || place[1].innerHTML === undefined) {
                place[1].innerHTML = runner[1] + " crossed the line in " + time[1] + " ms";
            }
            if (place[2].innerHTML === 'undefined crossed the line in undefined ms' || place[2].innerHTML === '' || place[2].innerHTML === undefined) {
                place[2].innerHTML = runner[2] + " crossed the line in " + time[2] + " ms";
            }
            if (place[3].innerHTML === 'undefined crossed the line in undefined ms' || place[3].innerHTML === '' || place[3].innerHTML === undefined) {
                place[3].innerHTML = runner[3] + " crossed the line in " + time[3] + " ms";
            }
            if (place[4].innerHTML === 'undefined crossed the line in undefined ms' || place[4].innerHTML === '' || place[4].innerHTML === undefined) {
                place[4].innerHTML = runner[4] + " crossed the line in " + time[4] + " ms";
            }
            if (place[5].innerHTML === 'undefined crossed the line in undefined ms' || place[5].innerHTML === '' || place[5].innerHTML === undefined) {
                place[5].innerHTML = runner[5] + " crossed the line in " + time[5] + " ms";
            }
            if (place[6].innerHTML === 'undefined crossed the line in undefined ms' || place[6].innerHTML === '' || place[6].innerHTML === undefined) {
                place[6].innerHTML = runner[6] + " crossed the line in " + time[6] + " ms";
            }
            if (place[7].innerHTML === 'undefined crossed the line in undefined ms' || place[7].innerHTML === '' || place[7].innerHTML === undefined) {
                place[7].innerHTML = runner[7] + " crossed the line in " + time[7] + " ms";
            }
        }

        if (runner.length === 8) {
            $.post('http://localhost:3000/runners/', {
                "1st": runner[0],
                '1st-time': time[0],
                "2nd": runner[1],
                '2nd-time': time[1],
                "3rd": runner[2],
                '3rd-time': time[2],
                "4th": runner[3],
                '4th-time': time[3],
                "5th": runner[4],
                '5th-time': time[4],
                "6th": runner[5],
                '6th-time': time[5],
                "7th": runner[6],
                '7th-time': time[6],
                "8th": runner[7],
                '8th-time': time[7]
            }, function (data, status) {
                console.log(data, status);
            });
        } else {
            setTimeout(function () {
                $.post('http://localhost:3000/runners/', {
                    "1st": runner[0],
                    '1st-time': time[0],
                    "2nd": runner[1],
                    '2nd-time': time[1],
                    "3rd": runner[2],
                    '3rd-time': time[2],
                    "4th": runner[3],
                    '4th-time': time[3],
                    "5th": runner[4],
                    '5th-time': time[4],
                    "6th": runner[5],
                    '6th-time': time[5],
                    "7th": runner[6],
                    '7th-time': time[6],
                    "8th": runner[7],
                    '8th-time': time[7]
                }, function (data, status) {
                    console.log(data, status);
                });
            }, 2000);


        }

        // serverPost(runner, time);
        //
        // // this.setState({runner, time});
        // function serverPost(runner, time) {
        //
        // }
    };

    render() {
        return (
            <React.Fragment>
                <header>
                    <main>
                        <div ref={this.track} className="track">
                            <img id='worker' ref={this.worker} className="track__runner" src={worker} alt="worker"/>
                            <img id='mario' ref={this.mario} className="track__runner" src={mario} alt="mario"/>
                            <img id='sonic' ref={this.sonic} className="track__runner" src={sonic} alt="sonic"/>
                            <img id='flash' ref={this.flash} className="track__runner" src={flash} alt="flash"/>
                            <img id='carpet' ref={this.carpet} className="track__runner" src={carpet} alt="carpet"/>
                            <img id='pacman' ref={this.pacman} className="track__runner" src={pacman} alt="pacman"/>
                            <img id='kabal' ref={this.kabal} className="track__runner" src={kabal} alt="kabal"/>
                            <img id='olympics' ref={this.olympics} className="track__runner" src={olympics}
                                 alt="olympics"/>
                        </div>
                    </main>
                </header>
                {/*<Table data={this.state}/>*/}
                <table>
                    <tbody>
                    <tr>
                        <th>#</th>
                        <th>Runner</th>
                    </tr>
                    <tr>
                        <td>1st</td>
                        <td className="place"></td>
                    </tr>
                    <tr>
                        <td>2nd</td>
                        <td className="place"></td>
                    </tr>
                    <tr>
                        <td>3rd</td>
                        <td className="place"></td>
                    </tr>
                    <tr>
                        <td>4th</td>
                        <td className="place"></td>
                    </tr>
                    <tr>
                        <td>5th</td>
                        <td className="place"></td>
                    </tr>
                    <tr>
                        <td>6th</td>
                        <td className="place"></td>
                    </tr>
                    <tr>
                        <td>7th</td>
                        <td className="place"></td>
                    </tr>
                    <tr>
                        <td>8th</td>
                        <td className="place"></td>
                    </tr>
                    </tbody>
                </table>
                <Controls makeThemRun={this.makeThemRun}/>
            </React.Fragment>
        )
    }
}
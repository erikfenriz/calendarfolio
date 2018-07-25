import React, {Component} from 'react';
import Header from "./Header";
import Footer from "./Footer";

class Calendar extends Component {

    render() {
        return (
            <React.Fragment>
                <Header/>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Calendar;
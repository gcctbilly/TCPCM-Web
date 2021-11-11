import React, { Component } from 'react';
import Header from '../../../../components/professor/Header/Header';
import CapstoneMenuBody from '../../../../components/professor/capstoneCourse/CapstoneMenuBody/CapstoneMenuBody'

class Capstone extends Component {
    render() {
        return (
            <div>
                <Header/>
                <CapstoneMenuBody/>
            </div>
        );
    }
}

export default Capstone;

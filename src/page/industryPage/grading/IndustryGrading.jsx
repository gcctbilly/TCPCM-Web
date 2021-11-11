import React, { Component } from 'react';
import Header from '../../../components/industry/header/Header';
import GradingBody from '../../../components/industry/gradingBody/GradingBody';

class IndustryGrading extends Component {
    render() {
        return (
            <div>
                <Header/>
                <GradingBody/>
            </div>
        );
    }
}

export default IndustryGrading;

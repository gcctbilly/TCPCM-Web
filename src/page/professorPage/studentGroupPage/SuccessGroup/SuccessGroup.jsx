import React, { Component } from 'react';
import Header from '../../../../components/professor/Header/Header';
import SuccessGroupBody from '../../../../components/professor/studentGroup/SuccessGroupBody/SuccessGroupBody';


class SuccessGroup extends Component {
    render() {
        return (
            <div>
                <Header/>
                <SuccessGroupBody/>
            </div>
        );
    }
}

export default SuccessGroup;

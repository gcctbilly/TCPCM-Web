import React, { Component } from 'react'
import Header from '../../../../components/professor/Header/Header';
import SuccessClassBody from '../../../../components/professor/capstoneCourse/SuccessClassBody/SuccessClassBody'

export default class SuccessClass extends Component {
    render() {
        return (
            <div>
                <Header/>
                <SuccessClassBody/>
            </div>
        )
    }
}

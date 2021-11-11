import React, { Component } from 'react'
import Header from '../../../../components/professor/Header/Header';
import SuccessStudentBody from '../../../../components/professor/capstoneCourse/SuccessStudentBody/SuccessStudentBody'

export default class SuccessStudent extends Component {
    render() {
        return (
            <div>
                <Header/>
                <SuccessStudentBody/>
            </div>
        )
    }
}

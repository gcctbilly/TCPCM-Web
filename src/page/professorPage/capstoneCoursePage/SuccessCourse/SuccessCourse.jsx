import React, { Component } from 'react'
import Header from '../../../../components/professor/Header/Header';
import SuccessCourseBody from '../../../../components/professor/capstoneCourse/SuccessCourseBody/SuccessCourseBody'

export default class SuccessCourse extends Component {
    render() {
        return (
            <div>
                <Header/>
                <SuccessCourseBody/>
            </div>
        )
    }
}

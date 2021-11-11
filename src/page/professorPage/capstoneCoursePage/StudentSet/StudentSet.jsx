import React, { Component } from 'react'
import Header from '../../../../components/professor/Header/Header';
import StudentSetBody from '../../../../components/professor/capstoneCourse/StudentSetBody/StudentSetBody'

export default class StudentSet extends Component {
    render() {
        return (
            <div>
                <Header/>
                <StudentSetBody/>
            </div>
        )
    }
}

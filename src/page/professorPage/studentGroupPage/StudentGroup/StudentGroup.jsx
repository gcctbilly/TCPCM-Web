import React, { Component } from 'react'
import Header from '../../../../components/professor/Header/Header'
import StudentGroupBody from '../../../../components/professor/studentGroup/StudentGroupBody/StudentGroupBody'

export default class StudentGroup extends Component {
    render() {
        return (
            <div>
                <Header/>
                <StudentGroupBody/>
            </div>
        )
    }
}

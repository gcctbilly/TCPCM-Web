import React, { Component } from 'react'
import Header from '../../../../components/professor/Header/Header'
import StudentAccountBody from '../../../../components/professor/accountSet/StudentAccountBody/StudentAccountBody'

export default class StudentAccount extends Component {
    render() {
        return (
            <div>
                <Header/>
                <StudentAccountBody/>
            </div>
        )
    }
}

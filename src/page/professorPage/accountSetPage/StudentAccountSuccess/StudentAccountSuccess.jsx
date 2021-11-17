import React, { Component } from 'react'
import Header from '../../../../components/professor/Header/Header'
import StudentSuccessBody from '../../../../components/professor/accountSet/StudentSuccessBody/StudentSuccessBody'

export default class StudentAccountSuccess extends Component {
    render() {
        return (
            <div>
                <Header/>
                <StudentSuccessBody/>
            </div>
        )
    }
}

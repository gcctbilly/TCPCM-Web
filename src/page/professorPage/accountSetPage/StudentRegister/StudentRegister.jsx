import React, { Component } from 'react'
import StudentRegisterBody from '../../../../components/professor/accountSet/StudentRegisterBody/StudentRegisterBody'
import Header from '../../../../components/professor/Header/Header'


export default class StudentRegister extends Component {
    render() {
        return (
            <div>
                <Header/>
                <StudentRegisterBody/>
            </div>
        )
    }
}

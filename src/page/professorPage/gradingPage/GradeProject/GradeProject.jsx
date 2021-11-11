import React, { Component } from 'react'
import Header from '../../../../components/professor/Header/Header'
import GradeProjectBody from '../../../../components/professor/grading/GradeProjectBody/GradeProjectBody'

export default class GradeProject extends Component {
    render() {
        return (
            <div>
                <Header/>
                <GradeProjectBody/>
            </div>
        )
    }
}

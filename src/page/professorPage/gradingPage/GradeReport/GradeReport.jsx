import React, { Component } from 'react'
import Header from '../../../../components/professor/Header/Header'
import GradeReportBody from '../../../../components/professor/grading/GradeReportBody/GradeReportBody'

export default class GradeReport extends Component {
    render() {
        return (
            <div>
                <Header/>
                <GradeReportBody/>
            </div>
        )
    }
}

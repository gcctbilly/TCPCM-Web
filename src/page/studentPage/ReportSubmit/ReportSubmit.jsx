import React, { Component } from 'react'
import Header from '../../../components/student/Header/Header'
import ReportSubmitBody from '../../../components/student/ReportSubmitBody/ReportSubmitBody'

export default class ReportSubmit extends Component {
    render() {
        return (
            <div>
                <Header/>
                <ReportSubmitBody/>
            </div>
        )
    }
}

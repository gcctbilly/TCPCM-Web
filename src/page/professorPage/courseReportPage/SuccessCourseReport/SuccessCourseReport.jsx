import React, { Component } from 'react'
import Header from '../../../../components/professor/Header/Header'
import SuccessCourseReportBody from '../../../../components/professor/courseReport/SuccessCourseReportBody/SuccessCourseReportBody'

export default class SuccessCourseReport extends Component {
    render() {
        return (
            <div>
                <Header/>
                <SuccessCourseReportBody/>
            </div>
        )
    }
}

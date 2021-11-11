import React, { Component } from 'react'
import Header from '../../../../components/professor/Header/Header';
import SuccessReportSetBody from '../../../../components/professor/capstoneCourse/SuccessReportSetBody/SuccessReportSetBody'

export default class SuccessReportSet extends Component {
    render() {
        return (
            <div>
                <Header/>
                <SuccessReportSetBody/>
            </div>
        )
    }
}

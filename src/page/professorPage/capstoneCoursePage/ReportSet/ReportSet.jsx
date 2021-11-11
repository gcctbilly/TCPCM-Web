import React, { Component } from 'react'
import Header from '../../../../components/professor/Header/Header';
import ReportSetBody from '../../../../components/professor/capstoneCourse/ReportSetBody/ReportSetBody'

export default class ReportSet extends Component {
    render() {
        return (
            <div>
                <Header/>
                <ReportSetBody/>
            </div>
        )
    }
}

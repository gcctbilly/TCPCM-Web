import React, { Component } from 'react'
import Header from '../../../../components/professor/Header/Header'
import CourseReportBody from '../../../../components/professor/courseReport/CourseReportBody/CourseReportBody'


export default class CourseReport extends Component {
    render() {
        return (
            <div>
                <Header/>
                <CourseReportBody/>
            </div>
        )
    }
}

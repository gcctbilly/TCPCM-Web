import React, { Component } from 'react'
import Header from '../../../components/student/Header/Header'
import SummarySubmitBody from '../../../components/student/SummarySubmitBody/SummarySubmitBody'

export default class SummarySubmit extends Component {
    render() {
        return (
            <div>
                <Header/>
                <SummarySubmitBody/>
            </div>
        )
    }
}

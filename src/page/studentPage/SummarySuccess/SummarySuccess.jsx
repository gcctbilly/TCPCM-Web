import React, { Component } from 'react'
import Header from '../../../components/student/Header/Header'
import SummarySuccessBody from '../../../components/student/SummarySuccessBody/SummarySuccessBody'

export default class SummarySuccess extends Component {
    render() {
        return (
            <div>
                <Header/>
                <SummarySuccessBody/>
            </div>
        )
    }
}

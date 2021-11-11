import React, { Component } from 'react'
import Header from '../../../components/industry/header/Header'
import Summarybody from '../../../components/industry/summaryBody/SummaryBody'

export default class IndustrySummary extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Summarybody/>
            </div>
        )
    }
}

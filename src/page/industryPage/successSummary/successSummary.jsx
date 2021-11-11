import React, { Component } from 'react'

import Header from '../../../components/industry/header/Header'
import SuccessBody from '../../../components/industry/successBody/SuccessBody'


export default class SuccessSummary extends Component {
    render() {
        return (
            <div>
                <Header/>
                <SuccessBody title = "Successfully Submitted And Signed!" buttonText1 = "Submint AGAIN" buttonText2 = "MAIN MENU"/>
            </div>
        )
    }
}
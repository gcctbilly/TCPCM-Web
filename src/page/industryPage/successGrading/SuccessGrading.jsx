import React, { Component } from 'react'

import Header from '../../../components/industry/header/Header'
import SuccessBody from '../../../components/industry/successBody/SuccessBody'


export default class SuccseeGrading extends Component {
    render() {
        return (
            <div>
                <Header/>
                <SuccessBody title = "Successfully Confirmed And Signed!" buttonText1 = "GRADE AGAIN" buttonText2 = "MAIN MENU"/>
            </div>
        )
    }
}
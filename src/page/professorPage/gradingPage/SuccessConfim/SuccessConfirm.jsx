import React, { Component } from 'react'
import Header from '../../../../components/professor/Header/Header'
import SuccessConfirmBody from '../../../../components/professor/grading/SuccessConfirmBody/SuccessConfirmBody'

export default class SuccessConfirm extends Component {

    render() {
        return (
            <div>
                <Header/>
                <SuccessConfirmBody/>
            </div>
        )
    }
}

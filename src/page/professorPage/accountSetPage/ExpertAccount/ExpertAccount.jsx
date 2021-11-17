import React, { Component } from 'react'
import Header from '../../../../components/professor/Header/Header'
import ExpertAccountBody from '../../../../components/professor/accountSet/ExpertAccountBody/ExpertAccountBody'

export default class ExpertAccount extends Component {
    render() {
        return (
            <div>
                <Header/>
                <ExpertAccountBody/>
            </div>
        )
    }
}

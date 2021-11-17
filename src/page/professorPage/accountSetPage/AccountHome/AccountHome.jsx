import React, { Component } from 'react'
import Header from '../../../../components/professor/Header/Header'
import AccountHomeBody from '../../../../components/professor/accountSet/AccountHomeBody/AccountHomeBody'

export default class AccountHome extends Component {
    render() {
        return (
            <div>
                <Header/>
                <AccountHomeBody/>
            </div>
        )
    }
}

import React, { Component } from 'react'
import Header from '../../../../components/professor/Header/Header';
import SuccessProjectBody from '../../../../components/professor/capstoneCourse/SuccessProjectBody/SuccessProjectBody'

export default class SuccessProject extends Component {
    render() {
        return (
            <div>
                <Header/>
                <SuccessProjectBody/>
            </div>
        )
    }
}

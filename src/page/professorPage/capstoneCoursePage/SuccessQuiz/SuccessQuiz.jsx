import React, { Component } from 'react'
import Header from '../../../../components/professor/Header/Header';
import SuccessQuizBody from '../../../../components/professor/capstoneCourse/SuccessQuizBody/SuccessQuizBody'

export default class SuccessQuiz extends Component {
    render() {
        return (
            <div>
                <Header/>
                <SuccessQuizBody/>
            </div>
        )
    }
}

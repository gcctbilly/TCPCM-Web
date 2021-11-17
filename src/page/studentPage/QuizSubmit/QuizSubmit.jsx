import React, { Component } from 'react'
import Header from '../../../components/student/Header/Header'
import QuizSubmitBody from '../../../components/student/QuizSubmitBody/QuizSubmitBody'

export default class QuizSubmit extends Component {
    render() {
        return (
            <div>
                <Header/>
                <QuizSubmitBody/>
            </div>
        )
    }
}

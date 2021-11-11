import React, { Component } from 'react'
import Header from '../../../../components/professor/Header/Header'
import GradeQuizBody from '../../../../components/professor/grading/GradeQuizBody/GradeQuizBody'

export default class GradeQuiz extends Component {
    render() {
        return (
            <div>
                <Header/>
                <GradeQuizBody/>
            </div>
        )
    }
}

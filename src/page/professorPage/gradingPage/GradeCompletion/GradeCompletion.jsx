import React, { Component } from 'react'
import Header from '../../../../components/professor/Header/Header'
import GradeCompletionBody from '../../../../components/professor/grading/GradeCompletionBody/GradeCompletionBody'

export default class GradeCompletion extends Component {
    render() {
        return (
            <div>
                <Header/>
                <GradeCompletionBody/>
            </div>
        )
    }
}

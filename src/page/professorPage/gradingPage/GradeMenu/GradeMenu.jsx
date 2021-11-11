import React, { Component } from 'react'
import Header from '../../../../components/professor/Header/Header'
import GradeMenuBody from '../../../../components/professor/grading/GradeMenuBody/GradeMenuBody'

export default class GradeMenu extends Component {
    render() {
        return (
            <div>
                <Header/>
                <GradeMenuBody/>
            </div>
        )
    }
}

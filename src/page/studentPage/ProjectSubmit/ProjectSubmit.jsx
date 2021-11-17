import React, { Component } from 'react'
import Header from '../../../components/student/Header/Header'
import ProjectSubmitBody from '../../../components/student/ProjectSubmitBody/ProjectSubmitBody'

export default class ProjectSubmit extends Component {
    render() {
        return (
            <div>
                <Header/>
                <ProjectSubmitBody/>
            </div>
        )
    }
}

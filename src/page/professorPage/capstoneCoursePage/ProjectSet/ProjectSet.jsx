import React, { Component } from 'react'
import Header from '../../../../components/professor/Header/Header'
import ProjectSetBody from '../../../../components/professor/capstoneCourse/ProjectSetBody/ProjectSetBody';

export default class ProjectSet extends Component {
    render() {
        return (
            <div>
                <Header/>
                <ProjectSetBody/>
            </div>
        )
    }
}

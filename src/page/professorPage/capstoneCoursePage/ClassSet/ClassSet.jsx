import React, { Component } from 'react'
import Header from '../../../../components/professor/Header/Header'
import ClassSetBody from '../../../../components/professor/capstoneCourse/ClassSetBody/ClassSetBody'

export default class ClassSet extends Component {
    render() {
        return (
            <div>
                <Header/>
                <ClassSetBody/>
            </div>
        )
    }
}

import React, { Component } from 'react'
import Header from '../../../../components/professor/Header/Header'
import MilestoneSetBody from '../../../../components/professor/capstoneCourse/MilestoneSetBody/MilestoneSetBody';

export default class MilestoneSet extends Component {
    render() {
        return (
            <div>
                <Header/>
                <MilestoneSetBody/>
            </div>
        )
    }
}

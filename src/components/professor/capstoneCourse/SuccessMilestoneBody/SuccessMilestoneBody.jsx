import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class SuccessMilestoneBody extends Component {
    render() {
        return (
            <div>
                <section class="highlight-clean">
                    <div class="container" style={{marginTop: '99px'}}>
                        <div class="intro">
                            <h2 class="text-nowrap text-center" style={{fontFamily: 'Adamina, serif',marginBottom: '64px'}}>Project Milestone Setup Completed! </h2>
                        </div>
                        <div class="buttons"><Link to='/professor/capstone/milestone' class="btn btn-primary" role="button">Setup again</Link>
                        <Link class="btn btn-light" to='/professor/capstone'type="button">back to course</Link></div>
                    </div>
                </section>
            </div>
        )
    }
}

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class SuccessStudentBody extends Component {
    render() {
        return (
            <div>
                <section className="highlight-clean">
                    <div className="container" style={{marginTop: '99px'}}>
                        <div className="intro">
                            <h2 className="text-center" style={{fontFamily: 'Adamina, serif',marginBottom: '64px'}}>Student Setup Completed! </h2>
                        </div>
                        <div className="buttons">
                            <Link className="btn btn-primary" type="button" to = '/professor/capstone/student'>Setup again</Link>
                            <Link className="btn btn-light" type="button" to = '/professor/capstone'>back to course</Link>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

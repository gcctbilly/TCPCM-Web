import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class StudentGroupBody extends Component {
    render() {
        return (
            <div>
                <section className="contact-clean">
                    <form method="post">
                        <h2 className="text-center">Upload Student Grouping Files</h2>
                        <header>
                            <p className="text-center text-secondary" style={{marginTop: '-25px',marginBottom: '53px'}}>&nbsp;Please upload the students grouping files here </p>
                        </header>
                        <div className="mb-3"></div>
                        <div className="mb-3"></div>
                        <div className="mb-3"><input className="form-control" type="file"/></div>
                        <div className="mb-3"><Link to = '/professor/studentgroup/success' className="btn btn-primary" role="button">upload</Link></div>
                    </form>
                </section>
            </div>
        )
    }
}

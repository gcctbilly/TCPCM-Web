import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class CourseReportBody extends Component {
    render() {
        return (
            <div>
                <section className="contact-clean">
                    <form method="post">
                        <h2 className="text-center">Student Performance Summary</h2>
                        <div className="mb-3"><small className="form-text">Write in the box.</small>
                        <textarea className="form-control" name="message" placeholder="Summary" rows="14"></textarea></div>
                        <div className="mb-3"><small className="form-text">Or upload a file.</small>
                        <input className="form-control" type="file"/></div>
                        <div className="mb-3"><Link to='/professor/coursereport/success' className="btn btn-primary" role="button">Submit and Sign </Link></div>
                    </form>
                </section>
            </div>
        )
    }
}

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ReportSubmitBody extends Component {
    render() {
        return (
            <div>
                <section className="contact-clean">
                    <form method="post">
                        <h2 className="text-center">Report Submission</h2>
                        <div className="mb-3">
                            <div className="w-100"></div><small className="form-text">Report Name</small><select className="form-select">
                                <optgroup label="This is a group">
                                    <option value="12" selected="">This is item 1</option>
                                    <option value="13">This is item 2</option>
                                    <option value="14">This is item 3</option>
                                </optgroup>
                            </select>
                        </div>
                        <div className="mb-3"><small className="form-text">File Upload</small><input className="form-control" type="file"/></div>
                        <div className="mb-3"><Link className="btn btn-primary" role="button" to='/student/report/success'>submit and sign</Link></div>
                    </form>
                </section>
            </div>
        )
    }
}

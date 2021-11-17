import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class SummarySubmitBody extends Component {
    render() {
        return (
            <div>
                <section className="contact-clean">
                    <form method="post">
                        <h2 className="text-center">Course Summary</h2>
                        <div className="mb-3"><small className="form-text">Write your summary here</small><textarea className="form-control" name="message" placeholder="Summary" rows="14"></textarea></div>
                        <div className="w-100"></div>
                        <div><small className="form-text">Or upload a file</small><input className="form-control" type="file"/></div>
                        <div className="mb-3"><Link className="btn btn-primary" role="button" to='/student/summary/success'>Submit and sign</Link></div>
                    </form>
                </section>
            </div>
        )
    }
}

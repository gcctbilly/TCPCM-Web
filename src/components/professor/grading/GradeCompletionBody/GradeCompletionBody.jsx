import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import GradeList from '../GradeList/GradeList'

export default class GradeCompletionBody extends Component {
    render() {
        return (
            <div>
                <section className="contact-clean">
                    <form method="post">
                        <h2 className="text-center">Student Course Completion Grading</h2>
                        <div className="mb-3"><small className="form-text">Capstone Course Name</small><input className="form-control" type="text" name="Capstone Course name"/></div>
                        <div className="mb-3"><small className="form-text">Capstone Course ID</small><input className="form-control" type="text" name="Capstone Course ID "/></div>
                        <div className="mb-3"><small className="form-text">Class ID</small><input className="form-control" type="text" name="class id"/></div>
                        <div className="mb-3"><small className="form-text">Student Name</small><input className="form-control" type="text" name="student name"/></div>
                        <div className="mb-3"><small className="form-text">Student ID</small><input className="form-control" type="text" name="student id"/></div>
                        <GradeList/>
                        <div className="mb-3"></div>
                        <div className="mb-3"><small className="form-text">Comment</small><textarea className="form-control" name="Comment" placeholder="Comment" rows="14"></textarea></div>
                        <div className="mb-3"><Link className="btn btn-primary" role="button" to='/professor/grading/completion/success'>Comfirm and sign</Link></div>
                    </form>
                </section>
            </div>
        )
    }
}

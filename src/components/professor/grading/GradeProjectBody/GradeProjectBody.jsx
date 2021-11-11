import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import GradeList from '../GradeList/GradeList'

export default class GradeProjectBody extends Component {
    render() {
        return (
            <div>
                <section className="contact-clean">
                    <form method="post">
                        <h2 className="text-center">Student Project Grading</h2>
                        <div className="mb-3"><small className="form-text">Project Name</small><input className="form-control" type="text" name="project name"/></div>
                        <div className="mb-3"><small className="form-text">Project ID</small><input className="form-control" type="text" name="project ID "/></div>
                        <div className="mb-3"><small className="form-text">Course ID</small><input className="form-control" type="text" name="course id"/></div>
                        <div className="mb-3"><small className="form-text">Class ID</small><input className="form-control" type="text" name="class id"/></div>
                        <GradeList/>
                        <div className="mb-3"></div>
                        <div className="mb-3"><small className="form-text">Comment</small><textarea className="form-control" name="Comment" placeholder="Comment" rows="14"></textarea></div>
                        <div className="mb-3"><Link className="btn btn-primary" role="button" to='/professor/grading/project/success'>Comfirm and sign</Link></div>
                    </form>
                </section>
            </div>
        )
    }
}

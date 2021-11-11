import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class MilestoneSetBody extends Component {
    render() {
        return (
            <div>
                <section className="contact-clean">
                    <form method="post">
                        <h2 className="text-center" style={{marginBottom: '15px'}}>Project Milestone Setup</h2>
                        <small className="form-text" style={{marginTop: '0px'}}>Please enter the required details.</small>
                        <div className="w-100" style={{width: '398px',height: '28px'}}></div>
                        <div className="mb-3"><small className="form-text">Professional Short Course Name </small>
                        <input className="form-control" type="text" name="name" placeholder=""/></div>
                        <div className="mb-3"><small className="form-text">Professional Short Course ID</small>
                        <input className="form-control" type="text" name="name" placeholder=""/></div>
                        <div className="mb-3"><small className="form-text">Professional Short Course Due Date</small>
                        <input className="form-control" type="text" name="name" placeholder=""/></div>
                        <div className="mb-3"><Link to='/professor/capstone/milestone/success' className="btn btn-primary" >SEtup</Link></div>
                    </form>
                </section>
            </div>
        )
    }
}

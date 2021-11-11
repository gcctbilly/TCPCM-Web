import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ProjectSetBody extends Component {
    render() {
        return (
            <div>
                <section className="contact-clean">
                    <form method="post">
                        <h2 className="text-center" style={{marginBottom: '15px'}}>Project Setup</h2
                        ><small className="form-text" style={{marginTop: '0px'}}>Please enter the required details.</small>
                        <div className="w-100" style={{width: '398px',height: '28px'}}></div>
                        <div className="mb-3"><small className="form-text">Project Name </small>
                        <input className="form-control" type="text" name="name" placeholder="Project Name"/></div>
                        <div className="mb-3"><small className="form-text">Course ID</small>
                        <input className="form-control" type="text" name="name" placeholder="Course ID"/></div>
                        <div className="mb-3"><small className="form-text">Class ID</small>
                        <input className="form-control" type="text" name="name" placeholder="Class ID"/></div>
                        <div className="mb-3"><small className="form-text">Group ID</small>
                        <input className="form-control" type="text" name="name" placeholder="Group ID"/></div>
                        <div className="mb-3"><small className="form-text">Project Due Date</small>
                        <input className="form-control" type="text" name="name" placeholder="Project Due Date"/></div>
                        <div className="mb-3"><Link to='/professor/capstone/project/success'><button className="btn btn-primary" >SEtup</button></Link></div>
                    </form>
                </section>
            </div>
        )
    }
}

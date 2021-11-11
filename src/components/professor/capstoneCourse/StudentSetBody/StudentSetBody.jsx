import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class StudentSetBody extends Component {
    render() {
        return (
            <div>
                <section className="contact-clean">
                    <form method="post">
                        <h2 className="text-center" style={{marginBottom: '15px'}}>Student Setup</h2>
                        <small className="form-text" style={{marginTop: '0px'}}>Please enter the required details.</small>
                        <div className="w-100" style={{width: '398px',height: '28px'}}></div>
                        <div className="mb-3"><small className="form-text">Student Name </small>
                        <input className="form-control" type="text" name="name" placeholder="Student Name"/></div>
                        <div className="mb-3"><small className="form-text">Student ID</small>
                        <input className="form-control" type="text" name="name" placeholder="Student ID"/></div>
                        <div className="mb-3"><small className="form-text">Professor ID</small>
                        <input className="form-control" type="text" name="name" placeholder="Professor ID"/></div>
                        <div className="mb-3"><small className="form-text">Industry Expert ID</small>
                        <input className="form-control" type="text" name="name" placeholder="Industry Expert ID"/></div>
                        <div className="mb-3"><Link to='/professor/capstone/student/success'><button className="btn btn-primary" >SEtup</button></Link></div>
                    </form>
                </section>
            </div>
        )
    }
}

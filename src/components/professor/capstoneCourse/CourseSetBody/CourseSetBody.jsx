import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class CourseSetBody extends Component {
    render() {
        return (
            <div>
                <section className="contact-clean">
                    <form method="post">
                        <h2 className="text-center" style={{marginBottom: '15px'}}>Course Setup</h2>
                        <small className="form-text" style={{marginTop: '0px'}}>Please enter the required details.</small>
                        <div className="w-100" style={{width: '398px',height: '28px'}}></div>
                        <div className="mb-3"><small className="form-text">Course Name </small>
                        <input className="form-control" type="text" name="name" placeholder="Course Name"/></div>
                        <div className="mb-3"><small className="form-text">Course ID</small>
                        <input className="form-control" type="text" name="name" placeholder="Course ID"/></div>
                        <div className="mb-3"><small className="form-text">Teaching Staff</small>
                        <input className="form-control" type="text" name="name" placeholder="" style={{marginBottom: '15px'}}/>
                        <input className="form-control" type="text" name="name" placeholder="" style={{marginBottom: '15px'}}/>
                        <input className="form-control" type="text" name="name" placeholder=""/></div>
                        <div className="mb-3"><Link to = '/professor/capstone/course/success'><button className="btn btn-primary">SETUP</button></Link></div>
                    </form>
                </section>
            </div>
        )
    }
}

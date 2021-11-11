import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class QuizSetBody extends Component {
    render() {
        return (
            <div>
                <section className="contact-clean">
                    <form method="post">
                        <h2 className="text-center" style={{marginBottom: '15px'}}>Quiz Setup</h2>
                        <small className="form-text" style={{marginTop: '0px'}}>Please enter the required details.</small>
                        <div className="w-100" style={{width: '398px',height: '28px'}}></div>
                        <div className="mb-3"><small className="form-text">Quiz Name </small>
                        <input className="form-control" type="text" name="name" placeholder="Quiz Name"/></div>
                        <div className="mb-3"><small className="form-text">Course ID</small>
                        <input className="form-control" type="text" name="name" placeholder="Course ID"/></div>
                        <div className="mb-3"><small className="form-text">Quiz Description</small
                        ><input className="form-control" type="text" name="name" placeholder="Quiz Description"/></div>
                        <div className="mb-3"><small className="form-text">Quiz Due Date</small>
                        <input className="form-control" type="text" name="name" placeholder="Quiz Due Date"/></div>
                        <div className="mb-3"><Link to='/professor/capstone/quiz/success'><button className="btn btn-primary">SEtup</button></Link></div>
                    </form>
                </section>
            </div>
        )
    }
}

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class StudentAccountBody extends Component {
    render() {
        return (
            <div>
                <section className="contact-clean">
                    <form method="post">
                        <h2 className="text-center">Upload Student List</h2>
                        <header>
                            <p className="text-center text-secondary" style={{marginTop: '-25px',marginBottom: '53px'}}>Please upload the students list in the format of Excel.&nbsp;In your Excel file, please put the “Student Number” in the fist column and the “Student Name in English” in the second column. </p>
                        </header>
                        <div className="mb-3"></div>
                        <div className="mb-3"></div>
                        <div className="mb-3"><input className="form-control" type="file"/></div>
                        <div className="mb-3"><Link className="btn btn-primary" role="button" to='/professor/account/student/list'>Registered Students List </Link></div>
                    </form>
                </section>
            </div>
        )
    }
}

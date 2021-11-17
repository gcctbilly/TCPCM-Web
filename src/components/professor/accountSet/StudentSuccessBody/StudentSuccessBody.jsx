import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class StudentSuccessBody extends Component {
    render() {
        return (
            <div>
                <section className="highlight-clean">
                    <div className="container" style={{marginTop: '99px'}}>
                        <div className="intro">
                            <h2 className="text-nowrap text-center" style={{fontFamily: 'Adamina, serif',marginBottom: '64px'}}>Student Account Setup Completed! </h2>
                        </div>
                        <div className="buttons">
                            <Link className="btn btn-primary" role="button" to='/professor/account/student/list'>Setup again</Link>
                            <Link className="btn btn-light" role="button" to='/professor/account'>back to Setup</Link>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

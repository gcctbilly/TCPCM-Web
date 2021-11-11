import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class SuccessCourseReportBody extends Component {
    render() {
        return (
            <div>
                <section className="highlight-clean">
                    <div className="container" style={{marginTop: '99px'}}>
                        <div className="intro">
                            <h2 className="text-nowrap text-center" style={{fontFamily: 'Adamina, serif',marginBottom: '64px'}}>Successfully Submitted and Signed! </h2>
                        </div>
                        <div className="buttons"><Link to='/professor/coursereport' className="btn btn-primary" role="button" >Submit again</Link>
                        <Link to='/professor/home' className="btn btn-light" role="button" >Main menu</Link></div>
                    </div>
                </section>
            </div>
        )
    }
}

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class SuccessProjectBody extends Component {
    render() {
        return (
            <div>
                <section className="highlight-clean">
                    <div className="container" style={{marginTop: '99px'}}>
                        <div className="intro">
                            <h2 className="text-nowrap text-center" style={{fontFamily: 'Adamina, serif',marginBottom: '64px'}}>Project Setup Completed! </h2>
                        </div>
                        <div className="buttons"><Link className="btn btn-primary" role="button" to = '/professor/capstone/project'>Setup again</Link><Link className="btn btn-light" type="button" to='/professor/capstone'>back to course</Link></div>
                    </div>
                </section>
            </div>
        )
    }
}

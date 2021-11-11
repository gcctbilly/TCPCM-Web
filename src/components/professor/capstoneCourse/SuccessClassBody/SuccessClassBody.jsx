import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class SuccessClassBody extends Component {
    render() {
        return (
            <div>
                <section className="highlight-clean">
                    <div className="container" style={{marginTop: '99px'}}>
                        <div className="intro">
                            <h2 className="text-center" style={{fontFamily: 'Adamina, serif',marginBottom: '64px'}}>Class Setup Completed! </h2>
                        </div>
                        <div className="buttons">
                            <Link to = '/professor/capstone/class' className="btn btn-primary" role="button">Setup again</Link>
                            <Link to = '/professor/capstone' className="btn btn-primary" role="button">back to course</Link>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

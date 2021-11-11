import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class SuccessCourseBody extends Component {
    render() {
        return (
            <div>
                <section className="highlight-clean">
                    <div className="container" style={{marginTop: '99px'}}>
                        <div className="intro">
                            <h2 className="text-center" style={{fontFamily: 'Adamina, serif',marginBottom: '64px'}}>Course Setup Completed! </h2>
                        </div>
                        <div className="buttons">
                            <Link to = '/professor/capstone/course'><button className="btn btn-primary" type="button" href="#">Setup again</button></Link>
                            <Link to = '/professor/capstone/class'><button className="btn btn-light" type="button">setup class</button></Link>
                            <Link to = '/professor/capstone'><button className="btn btn-primary" type="button">back to course</button></Link>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

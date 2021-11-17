import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class HomeBody extends Component {
    render() {
        const nameOfClass = {linkClass:"btn btn-primary border rounded-pill d-xl-flex justify-content-xl-center align-items-xl-center"};
        const style = {linkStyle:{width: '300px',height: '65px',margin: '8px 0px 0px',marginTop: '50px',marginBottom: '35px',marginLeft: '480px'}}
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col" style={{width: '1152px',marginTop: '25px'}}>
                            <Link className={nameOfClass.linkClass} role="button" style={style.linkStyle} to ="/student/report">Report Submission </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Link className={nameOfClass.linkClass} role="button" style={style.linkStyle} to="/student/quiz">Quiz Submission </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Link className={nameOfClass.linkClass} role="button" style={style.linkStyle} to="/student/project_milestone">Project Milestone Submission</Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Link className={nameOfClass.linkClass} role="button" style={style.linkStyle} to="/student/summary">Course Summary </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

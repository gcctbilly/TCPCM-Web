import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class HomeBody extends Component {
    render() {
        const nameOfClass = {linkClass:"btn btn-primary border rounded-pill d-xl-flex justify-content-xl-center align-items-xl-center"};
        const style = {linkStyle:{width: '300px',height: '65px',margin: '8px 0px 0px',marginTop: '50px',marginBottom: '35px',marginLeft: '480px'}}
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col offset-xl-0 d-xl-flex"><Link className={nameOfClass.linkClass} role="button" style={style.linkStyle} to = '/professor/capstone'>Capstone Project Course</Link></div>
                    </div>
                    <div className="row">
                        <div className="col"><Link className={nameOfClass.linkClass} role="button" style = {style.linkStyle}>Account Setup </Link></div>
                    </div>
                    <div className="row">
                        <div className="col"><Link className={nameOfClass.linkClass} role="button" style = {style.linkStyle} to ='/professor/studentgroup'>Student Grouping </Link></div>
                    </div>
                    <div className="row">
                        <div className="col"><Link className={nameOfClass.linkClass} role="button" style = {style.linkStyle} to = '/professor/grading'>Grading</Link></div>
                    </div>
                    <div className="row">
                        <div className="col"><Link className={nameOfClass.linkClass} role="button" style = {style.linkStyle} to ='/professor/coursereport'>Course Report</Link></div>
                    </div>
                </div>
            </div>
        )
    }
}

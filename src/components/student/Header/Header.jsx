import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div>
                <div className="navbar navbar-light navbar-expand-md" style={{background: '#9f2536',height: '65px'}}>
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="#" style={{width: '130.8906px',color: 'var(--bs-light)'}}>AF Blockchain</Link>
                        <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1">
                            <span className="visually-hidden">Toggle navigation</span>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse d-xl-flex justify-content-xl-end" id="navcol-1" style={{width: '1020.12px',margin: '4px',padding: '0px',color: 'var(--bs-light)'}}>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link active" to="#" style={{color: 'var(--bs-light)',fontFamily: 'Almarai, sans-serif'}}>Industry Expert</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to = "" style={{color: 'var(--bs-warning)',fontFamily: 'Almarai, sans-serif'}}>Professor</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/student/home" style={{color: 'var(--bs-body-bg)',fontFamily: 'Almarai, sans-serif'}}>Student</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="#" style={{color: 'var(--bs-warning)',fontFamily: 'Almarai, sans-serif'}}>General Inquiry</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="#" style={{fontFamily: 'Almarai, sans-serif',color: 'var(--bs-white)'}}><strong>Contact Us</strong></Link>
                                </li>
                                <li className="nav-item">
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

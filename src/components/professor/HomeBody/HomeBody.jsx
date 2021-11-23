import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Footer from '../../Footer/Footer'

export default class HomeBody extends Component {
    render() {
        return (
            <div>
                <header className="text-center text-white masthead" style={{background:"url("+ require("./image/bg-masthead.jpg").default + ") no-repeat center center",backgroundSize:"cover"}}>
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-9 mx-auto position-relative">
                                <h1 className="mb-5">Professor Home Page</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <section className="text-center bg-light features-icons">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="mx-auto features-icons-item mb-5 mb-lg-0 mb-lg-3">
                                    <div className="d-flex features-icons-icon"><i className="icon-graduation m-auto text-primary" data-bss-hover-animate="pulse"></i></div>
                                    <h3><Link to = "/professor/capstone">Capstone Project Course</Link></h3>
                                    <p className="lead mb-0">Setup course related contents</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="mx-auto features-icons-item mb-5 mb-lg-0 mb-lg-3">
                                    <div className="d-flex features-icons-icon"><i className="icon-user m-auto text-primary" data-bss-hover-animate="pulse"></i></div>
                                    <h3><Link to = "/professor/account">Account Setup</Link></h3>
                                    <p className="lead mb-0">Setup account for students and industry experts</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="mx-auto features-icons-item mb-5 mb-lg-0 mb-lg-3">
                                    <div className="d-flex features-icons-icon"><i className="icon-people m-auto text-primary" data-bss-hover-animate="pulse"></i></div>
                                    <h3><Link to = '/professor/studentgroup'>Student Grouping</Link></h3>
                                    <p className="lead mb-0">Upload student grouping files</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="text-center bg-light features-icons">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="mx-auto features-icons-item mb-5 mb-lg-0 mb-lg-3">
                                    <div className="d-flex features-icons-icon"><i className="icon-note m-auto text-primary" data-bss-hover-animate="pulse"></i></div>
                                    <h3><Link to = '/professor/grading'>Grading</Link></h3>
                                    <p className="lead mb-0">Grade students work</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="mx-auto features-icons-item mb-5 mb-lg-0 mb-lg-3">
                                    <div className="d-flex features-icons-icon"><i className="icon-pencil m-auto text-primary" data-bss-hover-animate="pulse"></i></div>
                                    <h3><Link to = '/professor/coursereport'>Course Report</Link></h3>
                                    <p className="lead mb-0">Submit course report</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="text-center text-white call-to-action" style={{background:"url("+ require("./image/bg-masthead.jpg").default + ") no-repeat center center",backgroundSize:'cover'}}>
                    <div className="overlay"></div>
                </section>
                <Footer/>
            </div>
        )
    }
}

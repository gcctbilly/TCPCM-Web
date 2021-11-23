import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="bg-light footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 text-center text-lg-start my-auto h-100">
                                <ul className="list-inline mb-2">
                                    <li className="list-inline-item"><Link>About</Link></li>
                                    <li className="list-inline-item"><span>⋅</span></li>
                                    <li className="list-inline-item"><Link>Contact</Link></li>
                                    <li className="list-inline-item"><span>⋅</span></li>
                                    <li className="list-inline-item"><Link>Terms of &nbsp;Use</Link></li>
                                    <li className="list-inline-item"><span>⋅</span></li>
                                    <li className="list-inline-item"><Link>Privacy Policy</Link></li>
                                </ul>
                                <p className="text-muted small mb-4 mb-lg-0">© Brand 2021. All Rights Reserved.</p>
                            </div>
                            <div className="col-lg-6 text-center text-lg-end my-auto h-100">
                                <ul className="list-inline mb-0">
                                    <li className="list-inline-item"><Link><i className="fa fa-facebook fa-2x fa-fw"></i></Link></li>
                                    <li className="list-inline-item"><Link><i className="fa fa-twitter fa-2x fa-fw"></i></Link></li>
                                    <li className="list-inline-item"><Link ><i className="fa fa-instagram fa-2x fa-fw"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class HomeBody extends Component {
    render() {
        return (
            <div>
                <div className="container" style={{width: '800px',marginTop: '72px'}}>
                    <div className="row" style={{boxShadow: '0px 0px var(--bs-blue)'}}>
                        <div className="col-md-12" style={{marginTop: '9px',padding: '50px',marginRight: '-2px',borderColor: 'var(--bs-blue)'}}>
                            <Link className="btn btn-primary border rounded-pill shadow-sm d-xl-flex justify-content-xl-center align-items-xl-center" role="button" style={{marginRight: '0px',marginLeft: '170px',width: '400px',height: '90px',fontSize: '25px',marginTop: '0px',background: 'rgb(13,110,253)'}} to="/industryPage/grading"><strong>Grading</strong></Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12" style={{padding: '50px'}}>
                            <Link className="btn btn-primary border rounded-pill shadow-sm d-xl-flex justify-content-xl-center align-items-xl-center" role="button" style={{marginRight: '0px',marginLeft: '170px',width: '400px',height: '90px',fontSize: '25px',marginTop: '0px',background: 'rgb(13,110,253)'}} to="/industryPage/summary"><strong>Project Summary</strong></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class AccountHomeBody extends Component {
    render() {
        const nameOfClass = {linkClass:"btn btn-primary border rounded-pill d-xl-flex justify-content-xl-center align-items-xl-center"};
        const style = {linkStyle:{width: '300px',height: '65px',margin: '8px 0px 0px',marginTop: '50px',marginBottom: '35px',marginLeft: '480px'}}
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1 style={{marginLeft: '482px',marginBottom: '2px',marginTop: '54px'}}>Set Account For&nbsp;</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col"><Link className= {nameOfClass.linkClass} style = {style.linkStyle} to='/professor/account/student'>Student&nbsp;</Link></div>
                    </div>
                    <div className="row">
                        <div className="col"><Link className= {nameOfClass.linkClass} style = {style.linkStyle} to='/professor/account/expert'>Industry Expert </Link></div>
                    </div>
                    <div className="row">
                        <div className="col"><Link className= {nameOfClass.linkClass} style = {style.linkStyle} to='/professor/home'>Main Menu</Link></div>
                    </div>
                </div>
            </div>
        )
    }
}

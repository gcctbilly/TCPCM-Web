import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class CapstoneMenuBody extends Component {
    render() {
        const nameOfClass = {linkClass:"btn btn-primary border rounded-pill d-xl-flex justify-content-xl-center align-items-xl-center"};
        const style = {linkStyle:{width: '300px',height: '65px',margin: '8px 0px 0px',marginTop: '50px',marginBottom: '35px',marginLeft: '480px'}}
        return (
            <div>
                    <div className="container">
                        <div className="row">
                            <div className="col"><Link className={nameOfClass.linkClass} role="button" style={style.linkStyle} to ='/professor/capstone/course'>Course Setup </Link></div>
                            <div className="col"><Link className={nameOfClass.linkClass} role="button" style={style.linkStyle} to ='/professor/capstone/class'>Class Setup </Link></div>
                            <div className="col"><Link className={nameOfClass.linkClass} role="button" style={style.linkStyle} to ='/professor/capstone/student'>Student Setup </Link></div>
                            <div className="col"><Link className={nameOfClass.linkClass} role="button" style={style.linkStyle} to ='/professor/capstone/reportset'>Course Report Setup </Link></div>
                            <div className="col"><Link className={nameOfClass.linkClass} role="button" style={style.linkStyle} to ='/professor/capstone/quiz'>Quiz Setup</Link></div>
                            <div className="col"><Link className={nameOfClass.linkClass} role="button" style={style.linkStyle} to ='/professor/capstone/project'>Project Setup</Link></div>
                            <div className="col"><Link className={nameOfClass.linkClass} role="button" style={style.linkStyle} to ='/professor/capstone/milestone'>Project Milestone Setup</Link></div>
                            <div className="col"><Link className={nameOfClass.linkClass} role="button" style={style.linkStyle} to='professor/home'>Main Menu</Link></div>
                        </div>
                    </div>
            </div>
        )
    }
}

import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Form extends Component {
    render() {
        return (
            <div>
                <form method="post">
                    <h2 className="text-center">Project Summary</h2>
                    <div className="mb-3"></div> 
                    <div className="mb-3"></div>
                    <div className="mb-3"><small className="form-text">Write summary here</small><textarea className="form-control" name="message" placeholder="Summary" rows="14"></textarea></div>
                    <div className="w-100" style={{height: '31px'}}></div>
                    <div><small className="form-text">Submit file</small><input className="form-control" type="file"/></div>
                    <Link to='/industryPage/summary/success'><div className="mb-3"><button className="btn btn-primary" type="submit" style={{marginTop: '61px'}}>submit and sign</button></div></Link>
                </form>
                
            </div>
        )
    }
}

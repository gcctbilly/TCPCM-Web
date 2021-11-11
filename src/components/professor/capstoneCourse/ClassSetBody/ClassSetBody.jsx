import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ClassSetBody extends Component {
    render() {
        return (
            <div>
                <section className="contact-clean">
                    <form method="post">
                        <h2 className="text-center" style={{marginBottom: '15px'}}>Capstone Project Course Class Setup</h2>
                        <small className="form-text" style={{marginTop: '0px'}}>Please enter the required details.</small>
                        <div className="w-100" style={{width: '398px',height: '28px'}}></div>
                        <div className="mb-3"><small className="form-text">Course ID</small>
                        <select className="form-select">
                                <optgroup label="This is a group">
                                    <option value="12" selected="">This is item 1</option>
                                    <option value="13">This is item 2</option>
                                    <option value="14">This is item 3</option>
                                </optgroup>
                        </select>
                        </div>
                        <div className="mb-3"><small className="form-text">Class ID</small>
                        <input className="form-control" type="text" name="name" placeholder="Class ID"/></div>
                        <div className="mb-3"><small className="form-text">Type of class</small>
                        <input className="form-control" type="text" name="name" placeholder="" style={{marginBottom: '15px'}}/>
                        <input className="form-control" type="text" name="name" placeholder="" style={{marginBottom: '15px'}}/>
                        <input className="form-control" type="text" name="name" placeholder=""/></div>
                        <div className="mb-3"><Link to = '/professor/capstone/class/success'><button className="btn btn-primary">SEtup</button></Link></div>
                    </form>
                </section>
            </div>
        )
    }
}

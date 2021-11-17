import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ExpertAccountBody extends Component {
    render() {
        return (
            <div>
                <section className="contact-clean">
                    <form method="post">
                        <h2 className="text-center">Account Setup</h2>
                        <div className="mb-3"><small className="form-text">Industry Expert Name&nbsp;</small><input className="form-control" type="text" name="Industry Expert Name "/></div>
                        <div className="mb-3"><small className="form-text">Industry Expert ID</small><input className="form-control" type="text" name="Industry Expert ID"/></div>
                        <div className="mb-3"><small className="form-text">Industry Expert Company&nbsp;</small><input className="form-control" type="text" name="Industry Expert Company "/></div>
                        <div className="mb-3"><Link className="btn btn-primary" role="button" to="/professor/account/expert/success">setup</Link></div>
                    </form>
                </section>
            </div>
        )
    }
}

import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class SuccessGroupBody extends Component {
    render() {
        return (
            <div>
                <section className="highlight-clean">
                    <div className="container" style={{marginTop: '99px'}}>
                        <div className="intro">
                            <h2 className="text-nowrap text-center" style={{fontFamily: 'Adamina, serif',marginBottom: '64px',marginLeft: '13px'}}>Student Grouping File Uploaded! </h2>
                        </div>
                        <div className="buttons"><Link to="/professor/home" className="btn btn-light" role="button">MAin menu</Link></div>
                    </div>
                </section>
            </div>
        );
    }
}

export default SuccessGroupBody;

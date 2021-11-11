import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

class SuccessConfirmBody extends Component {

    go = (number) => {
        return () => {
            this.props.history.go(number);
        }
    }


    render() {
        return (
            <div>
                <section className="highlight-clean">
                    <div className="container" style={{marginTop: '99px'}}>
                        <div className="intro">
                            <h2 className="text-nowrap text-center" style={{fontFamily: 'Adamina, serif',marginBottom: '64px'}}>Successfully Confirmed and Signed! </h2>
                        </div>
                        <div className="buttons">
                            <button className="btn btn-primary" onClick={this.go(-1)}>grade again</button>
                            <button className="btn btn-light" onClick={this.go(-2)}>back to grading</button>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default withRouter(SuccessConfirmBody)
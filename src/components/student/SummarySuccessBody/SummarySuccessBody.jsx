import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';

class SummarySuccessBody extends Component {
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
                            <button className="btn btn-light" onClick={this.go(-2)}>MAIN MENU</button>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default withRouter(SummarySuccessBody)
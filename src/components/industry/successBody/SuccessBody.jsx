import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

class SuccessBody extends Component {

    go = (number) => {
        return () => {
            this.props.history.go(number);

        }

    }

    render() {
        const {title, buttonText1, buttonText2} = this.props;
        return (
            <div>
                <section className="highlight-clean" style={{marginTop: "85px"}}>
                    <div className="container" style={{width: "1171px"}}>
                        <div className="intro">
                            <h2 className="text-nowrap text-capitalize text-center" style={{height: "108px",width: "500px",marginRight: '0px',fontFamily: "Adamina, serif",fontSize: '32px',marginBottom: '-25px',marginLeft: '-15px',marginTop: '27px'}}>{title}</h2>
                        </div>
                        <div className="buttons">
                            <button className="btn btn-primary" onClick={this.go(-1)}  style={{width: '180px',height: '60px',fontSize: '16px'}}>{buttonText1}</button>
                            <button className="btn btn-light border rounded" onClick={this.go(-2)} style={{width: '180px',height: '60px',fontSize: '16px'}}>{buttonText2}</button>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default withRouter(SuccessBody)

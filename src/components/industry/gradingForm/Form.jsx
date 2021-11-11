import React, { Component } from 'react'
import FormItem from './FormItem'
import {Link} from 'react-router-dom'

export default class Form extends Component {
    render() {
        return (
            <div>
                <form method="post">
                    <FormItem/>
                    <div className="mb-3"></div>
                    <div className="mb-3"><Link className="btn btn-primary" role="button" to = "/industryPage/grading/success">Confirm and sing</Link></div>
                </form>
                
            </div>
        )
    }
}

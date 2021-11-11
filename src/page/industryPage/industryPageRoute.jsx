import React, { Component } from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'

import IndustryHome from './home/IndustryHome'
import IndustryGrading from './grading/IndustryGrading'
import IndustrySummary from './summary/IndustrySummary'
import SuccessGrading from './successGrading/SuccessGrading'
import SuccessSummary from './successSummary/successSummary'


export default class industryPageRoute extends Component {
    render() {
        return (
            <div>
                <Switch>
                <Route path="/industryPage/home" component={IndustryHome}/>
                <Route path="/industryPage/grading/success" component = {SuccessGrading}/>
                <Route path="/industryPage/grading" component = {IndustryGrading}/>
                <Route path="/industryPage/summary/success" component = {SuccessSummary}/>
                <Route path="/industryPage/summary" component = {IndustrySummary}/>
                <Redirect to="/industryPage/home"/>
                </Switch>
            </div>
        )
    }
}

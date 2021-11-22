import React, { Component } from 'react'
import { Route, Switch,Redirect } from 'react-router'
import Home from './Home/Home'
import ReportSubmit from './ReportSubmit/ReportSubmit'
import Success from './Success/Success'
import QuizSubmit from './QuizSubmit/QuizSubmit'
import ProjectSubmit from './ProjectSubmit/ProjectSubmit'
import SummarySubmit from './SummarySubmit/SummarySubmit'
import SummarySuccess from './SummarySuccess/SummarySuccess'

export default class StudentPageRoute extends Component {
    render() {
        return (
            <div>
                <Switch>
                <Route path="/student/home" component={Home}/>
                <Route path="/student/report/success" component={Success}/>
                <Route path="/student/report" component={ReportSubmit}/>
                <Route path="/student/quiz/success" component={Success}/>
                <Route path="/student/quiz" component={QuizSubmit}/>
                <Route path="/student/project_milestone/success" component={Success}/>
                <Route path="/student/project_milestone" component={ProjectSubmit}/>
                <Route path="/student/summary/success" component={SummarySuccess}/>
                <Route path="/student/summary" component={SummarySubmit}/>
                <Redirect to="/student/home"/>
                </Switch>
            </div>
        )
    }
}

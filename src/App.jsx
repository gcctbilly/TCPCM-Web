import React, { Component } from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'

import industryPageRoute from './page/industryPage/industryPageRoute'
import ProfessorPageRoute from './page/professorPage/ProfessorPageRoute'
import StudentPageRoute from './page/studentPage/StudentPageRoute'

export default class App extends Component {
    render() {
        return(
            <div>
                <Switch>
                <Route path="/industryPage" component={industryPageRoute}/>
                <Route path="/professor" component= {ProfessorPageRoute}/>
                <Route path="/student" component= {StudentPageRoute}/>
                <Redirect to="/student"/>
                </Switch>
            </div>
        )
    }
}

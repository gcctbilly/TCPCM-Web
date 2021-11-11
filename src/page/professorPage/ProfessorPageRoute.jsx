import React, { Component } from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
import Home from './Home/Home'
import CapstoneMenu from './capstoneCoursePage/CapstoneMenu/CapstoneMenu'
import CourseSet from './capstoneCoursePage/CourseSet/CourseSet'
import SuccessCourse from './capstoneCoursePage/SuccessCourse/SuccessCourse'
import ClassSet from './capstoneCoursePage/ClassSet/ClassSet'
import SuccessClass from './capstoneCoursePage/SuccessClass/SuccessClass'
import StudentSet from './capstoneCoursePage/StudentSet/StudentSet'
import SuccessStudent from './capstoneCoursePage/SuccessStudent/SuccessStudent'
import ReportSet from './capstoneCoursePage/ReportSet/ReportSet'
import SuccessReportSet from './capstoneCoursePage/SuccessReportSet/SuccessReportSet'
import QuizSet from './capstoneCoursePage/QuizSet/QuizSet'
import SuccessQuiz from './capstoneCoursePage/SuccessQuiz/SuccessQuiz'
import ProjectSet from './capstoneCoursePage/ProjectSet/ProjectSet'
import SuccessProject from './capstoneCoursePage/SuccessProject/SuccessProject'
import MilestoneSet from './capstoneCoursePage/MilestoneSet/MilestoneSet'
import SuccessMilestone from './capstoneCoursePage/SuccessMilestone/SuccessMilestone'
import StudentGroup from './studentGroupPage/StudentGroup/StudentGroup'
import SuccessGroup from './studentGroupPage/SuccessGroup/SuccessGroup'
import CourseReport from './courseReportPage/CourseReport/CourseReport'
import SuccessCourseReport from './courseReportPage/SuccessCourseReport/SuccessCourseReport'
import GradeMenu from './gradingPage/GradeMenu/GradeMenu'
import GradeReport from './gradingPage/GradeReport/GradeReport'
import GradeQuiz from './gradingPage/GradeQuiz/GradeQuiz'
import GradeProject from './gradingPage/GradeProject/GradeProject'
import GradeCompletion from './gradingPage/GradeCompletion/GradeCompletion'
import SuccessConfirm from './gradingPage/SuccessConfim/SuccessConfirm'

export default class ProfessorPageRoute extends Component {
    render() {
        
        return (
            <div>
                <Switch>
                    <Route path = '/professor/home' component = {Home}/>
                    <Route path = '/professor/grading/report/success' component = {SuccessConfirm}/>
                    <Route path = '/professor/grading/report' component = {GradeReport}/>
                    <Route path = '/professor/grading/quiz/success' component = {SuccessConfirm}/>
                    <Route path = '/professor/grading/quiz' component = {GradeQuiz}/>
                    <Route path = '/professor/grading/project/success' component = {SuccessConfirm}/>
                    <Route path = '/professor/grading/project' component = {GradeProject}/>
                    <Route path = '/professor/grading/completion/success' component = {SuccessConfirm}/>
                    <Route path = '/professor/grading/completion' component = {GradeCompletion}/>
                    <Route path = '/professor/grading' component = {GradeMenu}/>
                    <Route path = '/professor/coursereport/success' component = {SuccessCourseReport}/>
                    <Route path = '/professor/coursereport' component = {CourseReport}/>
                    <Route path = '/professor/studentgroup/success' component = {SuccessGroup}/>
                    <Route path = '/professor/studentgroup' component = {StudentGroup}/>
                    <Route path ='/professor/capstone/course/success' component = {SuccessCourse}/>
                    <Route path = '/professor/capstone/course' component = {CourseSet}/>
                    <Route path = '/professor/capstone/class/success' component= {SuccessClass}/>
                    <Route path = '/professor/capstone/class' component = {ClassSet}/>
                    <Route path = '/professor/capstone/student/success' component = {SuccessStudent}/>
                    <Route path = '/professor/capstone/student' component = {StudentSet}/>
                    <Route path = '/professor/capstone/reportset/success' component = {SuccessReportSet}/>
                    <Route path = '/professor/capstone/reportset' component = {ReportSet}/>
                    <Route path = '/professor/capstone/quiz/success' component = {SuccessQuiz}/>
                    <Route path = '/professor/capstone/quiz' component = {QuizSet}/>
                    <Route path = '/professor/capstone/project/success' component = {SuccessProject}/>
                    <Route path = '/professor/capstone/project' component = {ProjectSet}/>
                    <Route path = '/professor/capstone/milestone/success' component = {SuccessMilestone}/>
                    <Route path = '/professor/capstone/milestone' component = {MilestoneSet}/>
                    <Route path = '/professor/capstone' component = {CapstoneMenu}/>
                    <Redirect to = '/professor/home'/>
                </Switch>
                
            </div>
        )
    }
}

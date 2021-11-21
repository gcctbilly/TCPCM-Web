import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class QuizSubmitBody extends Component {
    state = {studentKey:1, quizKey:null, file:null}

    //get the report key
    getQuizKey = (event) => {
        var quizKey = event.target.value
        if(!isNaN(quizKey)){
            quizKey = parseFloat(event.target.value)
        }
        if(quizKey === "null"){
            quizKey = null;
        }
        this.setState({quizKey})
    }

    //get the file
    getFile = (event) => {
        const file = event.target.files[0];
        this.setState({file})

    }

    //judge the input infomation and choose whether to submit
    handleSubmit = () => {
        if(this.state.quizKey === null) {
            alert("Please chooes the quiz name!")
        }
        else if(this.state.file === null) {
            alert("Please upload the file!")
        }
        else{
            this.props.history.push('/student/quiz/success')
        }
        return;
    }




    render() {
        const quizs = [{name:"quiz 1", key: 1}, {name:"quiz 2", key: 2}, {name:"quiz 3", key:3}];
        return (
            <div>
                <section className="contact-clean">
                    <form>
                        <h2 className="text-center">Quiz Submission</h2>
                        <div className="mb-3">
                            <div className="w-100"></div><small className="form-text">Quiz Name</small>
                            <select className="form-select" onChange = {(e) => this.getQuizKey(e)}>
                                <optgroup label="Choose the quiz">
                                <option value = "null">==Please choose==</option>
                                    {quizs.map((quizObj) => {
                                        return (
                                            <option value ={quizObj.key} key ={quizObj.key}>{quizObj.name}</option>
                                        )
                                    })}
                                </optgroup>
                            </select>
                        </div>
                        <div className="mb-3"><small className="form-text">File Upload</small>
                        <input className="form-control" type="file" onChange = {(e) => this.getFile(e)}/></div>
                        <div className="mb-3"><label className="btn btn-primary" onClick = {() => this.handleSubmit()}>submit and sign</label></div>
                    </form>
                </section>
            </div>
        )
    }
}

export default withRouter(QuizSubmitBody)
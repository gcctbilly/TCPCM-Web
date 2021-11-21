import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class ProjectSubmitBody extends Component {
    state = {studentKey:1, milestoneKey:null, file:null}

    //get the projectMilestone key
    getMilestoneKey = (event) => {
        var milestoneKey = event.target.value
        if(!isNaN(milestoneKey)){
            milestoneKey = parseFloat(event.target.value)
        }
        if(milestoneKey === "null"){
            milestoneKey = null;
        }
        this.setState({milestoneKey})
    }

    //get the file
    getFile = (event) => {
        const file = event.target.files[0];
        this.setState({file})

    }

    //judge the input infomation and choose whether to submit
    handleSubmit = () => {
        if(this.state.milestoneKey === null) {
            alert("Please chooes the milestone name!")
        }
        else if(this.state.file === null) {
            alert("Please upload the file!")
        }
        else{
            this.props.history.push('/student/project_milestone/success')
        }
        return;
    }
    render() {
        const projectMilestone = [{name:"project milestone 1", key: 1}, {name:"project milestone 2", key: 2}, {name:"project milestone 3", key:3}];
        return (
            <div>
                <section class="contact-clean">
                    <form method="post">
                        <h2 class="text-center">Project Milestone Submission</h2>
                        <div class="mb-3">
                            <div class="w-100"></div><small class="form-text">Milestone ID</small>
                            <select className="form-select" onChange = {(e) => this.getMilestoneKey(e)}>
                                <optgroup label="Choose the projectMilestone">
                                <option value = "null">==Please choose==</option>
                                    {projectMilestone.map((obj) => {
                                        return (
                                            <option value ={obj.key} key ={obj.key}>{obj.name}</option>
                                        )
                                    })}
                                </optgroup>
                            </select>
                        </div>
                        <div class="mb-3"><small class="form-text">File Upload</small>
                        <input className="form-control" type="file" onChange = {(e) => this.getFile(e)}/></div>
                        <div className="mb-3"><label className="btn btn-primary" onClick = {() => this.handleSubmit()}>submit and sign</label></div>
                    </form>
                </section>
            </div>
        )
    }
}

export default withRouter(ProjectSubmitBody)
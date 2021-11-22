import React, { Component } from 'react'
import { withRouter} from 'react-router-dom'

class SummarySubmitBody extends Component {
    state = {studentKey:1, courseKey:1, file:null, content:""}

    getContent = (event) => {
        var content = event.target.value;
        this.setState({content});
    }

    //get the file
    getFile = (event) => {
        const file = event.target.files[0];
        this.setState({file})

    }
    //judge the input infomation and choose whether to submit
    handleSubmit = () => {
        if(this.state.file === null && this.state.content === ""){
            alert("Please write in the summary text box or upload a file !")
        }
        else{
            this.props.history.push('/student/summary/success')
        }
        return;
    }

    render() {
        return (
            <div>
                <section className="contact-clean">
                    <form method="post">
                        <h2 className="text-center">Course Summary</h2>
                        <div className="mb-3"><small className="form-text">Write your summary here</small>
                        <textarea className="form-control" name="message" placeholder="Summary" rows="14" onChange = {(e) => this.getContent(e)}></textarea></div>
                        <div className="w-100"></div>
                        <div><small className="form-text">Or upload a file</small><input className="form-control" type="file" onChange = {(e) => this.getFile(e)}/></div>
                        <div className="mb-3">
                            <label className="btn btn-primary" role="button" onClick = {() => this.handleSubmit()}>Submit and sign</label>
                        </div>
                    </form>
                </section>
            </div>
        )
    }
}

export default withRouter(SummarySubmitBody)
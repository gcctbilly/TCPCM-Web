import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class ReportSubmitBody extends Component {
    state = {studentKey:1, reportKey:null, file:null}

    //get the report key
    getReportKey = (event) => {
        var reportKey = event.target.value
        console.log(reportKey)
        if(!isNaN(reportKey)){
            reportKey = parseFloat(event.target.value)
        }
        if(reportKey === "null"){
            reportKey = null;
        }
        this.setState({reportKey})
    }

    //get the file
    getFile = (event) => {
        const file = event.target.files[0];
        console.log(file);
        this.setState({file})

    }

    //judge the input infomation and choose whether to submit
    handleSubmit = () => {
        if(this.state.reportKey === null) {
            alert("Please chooes the report name!")
        }
        else if(this.state.file === null) {
            alert("Please upload the file!")
        }
        else{
            this.props.history.push('/student/report/success')
        }
        return;
    }


    render() {
        const reports = [{name:"report 1", key: 1}, {name:"report 2", key: 2}, {name:"reprot 3", key:3}];
        return (
            <div>
                <section className="contact-clean">   
                    <form>
                        <h2 className="text-center">Report Submission</h2>
                        <div className="mb-3">
                            <div className="w-100"></div><small className="form-text">Report Name</small>
                            <select className="form-select" onChange = {(e) => this.getReportKey(e)}>
                                <optgroup label="Choose the report">
                                <option value = "null">==Please choose==</option>
                                    {reports.map((reportObj) => {
                                        return (
                                            <option value ={reportObj.key} key ={reportObj.key}>{reportObj.name}</option>
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

export default withRouter(ReportSubmitBody)
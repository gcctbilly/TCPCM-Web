import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ProjectSubmitBody extends Component {
    render() {
        return (
            <div>
                <section class="contact-clean">
                    <form method="post">
                        <h2 class="text-center">Project Milestone Submission</h2>
                        <div class="mb-3">
                            <div class="w-100"></div><small class="form-text">Milestone ID</small><select class="form-select">
                                <optgroup label="This is a group">
                                    <option value="12" selected="">This is item 1</option>
                                    <option value="13">This is item 2</option>
                                    <option value="14">This is item 3</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="mb-3"><small class="form-text">File Upload</small><input class="form-control" type="file"/></div>
                        <div class="mb-3"><Link class="btn btn-primary" role="button" to='/student/project_milestone/success'>submit and sign</Link></div>
                    </form>
                </section>
            </div>
        )
    }
}

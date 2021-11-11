import React, { Component } from 'react'

export default class GradeList extends Component {
    render() {
        return (
            <div>
                <div className="mb-3"><small className="form-text">Grade</small>
                    <select className="form-select">
                            <optgroup label="This is a group">
                                <option value="12" selected="">A+</option>
                                <option value="13">A</option>
                                <option value="14">A-</option>
                                <option value="">B+</option>
                                <option value="">B</option>
                                <option value="">B-</option>
                                <option value="">C+</option>
                                <option value="">C</option>
                                <option value="">C-</option>
                                <option value="">D+</option>
                                <option value="">D</option>
                            </optgroup>
                    </select>
                </div>
            </div>
        )
    }
}

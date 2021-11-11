import React, { Component } from 'react'

export default class FormItem extends Component {
    render() {
        return (
            <div>
                <h2 className="text-center">Grading</h2>
                <div id="choose1" className="mb-3"><small className="form-text">Capstone Course Name&nbsp;</small><select className="form-select">
                        <optgroup label="This is a group">
                            <option value="12" selected="">This is item 1</option>
                            <option value="13">This is item 2</option>
                            <option value="14">This is item 3</option>
                        </optgroup>
                    </select></div>
                <div id="choose2" className="mb-3"><small className="form-text">Capstone Course ID&nbsp;</small><select className="form-select">
                        <optgroup label="This is a group">
                            <option value="12" selected="">This is item 1</option>
                            <option value="13">This is item 2</option>
                            <option value="14">This is item 3</option>
                        </optgroup>
                    </select></div>
                <div id="choose3" className="mb-3"><small className="form-text">Project Name&nbsp;</small><select className="form-select">
                        <optgroup label="This is a group">
                            <option value="12" selected="">This is item 1</option>
                            <option value="13">This is item 2</option>
                            <option value="14">This is item 3</option>
                        </optgroup>
                    </select></div>
                <div id="choose4" className="mb-3"><small className="form-text">Grade&nbsp;</small><select className="form-select">
                        <optgroup label="This is a group">
                            <option value="12" selected="">This is item 1</option>
                            <option value="13">This is item 2</option>
                            <option value="14">This is item 3</option>
                        </optgroup>
                    </select></div>
                
            </div>
        )
    }
}

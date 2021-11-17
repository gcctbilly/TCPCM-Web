import React, { Component } from 'react'
import Item from '../Item/Item'

export default class StudentRegisterBody extends Component {
    render() {
        return (
            <div>
                <div style={{marginTop: '83px'}}>
                    <div className="container">
                            <div className="intro" style={{marginBottom: '44px'}}>
                                <h2 className="text-center">Registered Students List</h2>
                                <p className="text-center">Please press the setup button to set up account for students.</p>
                            </div>
                            <ul className="list-group" style={{width: '900px',marginLeft: '186px'}}>
                                <li className="list-group-item"><span style={{fontWeight: 'bold'}}>Student Number </span><span style={{marginLeft: '190px',fontWeight: 'bold'}}>Student Name in English</span><span style={{marginLeft: '257px',fontWeight: 'bold'}}>&nbsp;Set Up</span></li>
                                <Item/>
                            </ul>
                    </div>
                </div>
            </div>
        )
    }
}

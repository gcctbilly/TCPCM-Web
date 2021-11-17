import React, { Component } from 'react'
import Header from '../../../components/student/Header/Header'
import HomeBody from '../../../components/student/HomeBody/HomeBody'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <HomeBody/>
            </div>
        )
    }
}

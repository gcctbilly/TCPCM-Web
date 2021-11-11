import React, { Component } from 'react';

import Header from '../../../components/professor/Header/Header'
import HomeBody from '../../../components/professor/HomeBody/HomeBody';

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

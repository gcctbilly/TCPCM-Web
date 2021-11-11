import React, { Component } from 'react';
import Header from '../../../../components/professor/Header/Header';
import CourseSetBody from '../../../../components/professor/capstoneCourse/CourseSetBody/CourseSetBody';

class Courseset extends Component {
    render() {
        return (
            <div>
                <Header/>
                <CourseSetBody/>
            </div>
        );
    }
}

export default Courseset;

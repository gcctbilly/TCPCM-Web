import React, { Component } from 'react';
import Header from '../../../../components/professor/Header/Header';
import QuizSetBody from '../../../../components/professor/capstoneCourse/QuizSetBody/QuizSetBody';

class QuizSet extends Component {
    render() {
        return (
            <div>
                <Header/>
                <QuizSetBody/>
            </div>
        );
    }
}

export default QuizSet;

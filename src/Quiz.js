import React, { Component } from 'react'

let quizData = require('./quiz_data.json')

class Quiz extends Component {
    state = {
        quiz_position: 1
    }

    render() {
        return (
            <div>
                <div className="QuizQuestion">
                    {quizData.quiz_question[0].instruction_test}
                </div>
            </div>
        )
    }
}

export default Quiz

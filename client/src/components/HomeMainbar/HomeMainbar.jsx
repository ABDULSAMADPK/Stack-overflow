import React from 'react'
import './HomeMainbar.css'
import { useLocation, useNavigate } from 'react-router-dom'
import QuestionList from './QuestionList'
import { useSelector } from 'react-redux'

const HomeMainbar = () => {

  const location = useLocation()
  const user = 1;
  const navigate = useNavigate()

  const questionsList = useSelector((state) => state.questionsReducer);
  

  // var questionsList = [{
  //   id: 1,
  //   votes: 3,
  //   noOfAnswers: 2,
  //   questionTitle: "What is a function?",
  //   questionBody: "It meant to be",
  //   questionTags: ["java", "node js", "react js", "mongodb"],
  //   userPosted: "mano",
  //   askedOn: "mar 2"
  // }, {
  //   id: 2,
  //   votes: 0,
  //   noOfAnswers: 0,
  //   questionTitle: "What is a function?",
  //   questionBody: "It meant to be",
  //   questionTags: ["java", "node js", "react js", "mongodb"],
  //   userPosted: "mano",
  //   askedOn: "mar 2"
  // }, {
  //   id: 3,
  //   votes: 1,
  //   noOfAnswers: 0,
  //   questionTitle: "What is a function?",
  //   questionBody: "It meant to be",
  //   questionTags: ["javascript", "phython"],
  //   userPosted: "mano",
  //   askedOn: "mar 2"
  // }
  // ]

  const checkAuth = () => {
    if(user === null){
      alert("login or signup to ask a question")
      navigate('/Auth')
    }else{
      navigate('AskQuestion')
    }
  }


  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === "/" ? (
          <h1>Top Questions</h1>
        ) : (
          <h1>All Questions</h1>
        )}
        <button onClick={checkAuth} className='ask-btn'>AskQuestion</button>
      </div>
      <div>
        {
          questionsList.data === null ?
            <h1>Loading...</h1> :
            <>
              <p>{questionsList.data.length} questions</p>
              <QuestionList questionsList = {questionsList.data} />
            </>
        }
      </div>
    </div>
  )
}

export default HomeMainbar
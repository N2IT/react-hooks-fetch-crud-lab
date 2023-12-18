import React, { useState, useEffect } from "react";
import QuestionItem from './QuestionItem'

function QuestionList() {
  const [ questions, setQuestions ] = useState([])

  const fetchQuestions = () => {
    return fetch("http://localhost:4000/questions")
    .then((res) => res.json())
    .then((questions) => {
      setQuestions(questions)
    })
  }

  useEffect(() => {
    fetchQuestions();
  })




  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((item) => (
          <QuestionItem key={item.id} question={item} />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;

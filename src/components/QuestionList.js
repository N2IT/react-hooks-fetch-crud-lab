import React, { useState, useEffect } from "react";
import QuestionItem from './QuestionItem'

function QuestionList() {
  const [ questions, setQuestions ] = useState([])
  useEffect(() => {
    return fetch("http://localhost:4000/questions")
    .then((res) => res.json())
    .then((questions) => {
      setQuestions(questions)
    })
  }, [])

  function onQuestionDelete(deletedItem) {
    const updatedQuestions = questions.filter((question) => question.id !== deletedItem.id);
    setQuestions(updatedQuestions)
  }
  
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((item) => (
          <QuestionItem key={item.id} question={item} onQuestionDelete={onQuestionDelete} />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
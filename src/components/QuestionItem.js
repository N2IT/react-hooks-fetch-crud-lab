import React from "react";

function QuestionItem({ question, onQuestionDelete }) {
  const { id, prompt, answers, correctIndex } = question;


  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDeleteClick(){
    fetch(`http://localhost:4000/questions/${id}`, {
      method: 'DELETE',
    })
    .then((r) => r.json())
    .then(() => onQuestionDelete(question))
  }

  function handleUpdatedAnswer(integer){
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify({
        "correctIndex" : integer
      })
    })
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={(e) => handleUpdatedAnswer(e.target.value)} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDeleteClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
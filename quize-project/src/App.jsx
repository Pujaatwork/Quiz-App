import { useState } from 'react'
import Question from './Component/Quiz'
import Option from './Component/Option'

import Data from './Data/Data.json'
import './App.css'

function App() {
  const [questionCount, setquestionCount] = useState(0);
  const [selectedOption, setselectedOption] = useState(null);
  const [selectedAnswer, selectedAnsOption] = useState(null);
  const handleClick = () => {
    let newQuesCount = questionCount
    setquestionCount(newQuesCount + 1);
    setselectedOption(null)
    selectedAnsOption(null)
    if (questionCount === 2) {
      setquestionCount(0)
    }
  }
  function clickedOption(currentIndex) {
    setselectedOption(currentIndex)

    selectedAnsOption(Data[questionCount].Answer)
    console.log(questionCount)
  }

  return (
    <div className='container'>
      <Question question={Data[questionCount].currentQuestion} />
      {
        Data[questionCount].option.map((option, i) => {
          return (
            <Option key={i} option={option} currectAnswer={selectedAnswer} currentIndex={i} clickedOption={clickedOption} selectedOption={selectedOption} questionCount={setquestionCount}/>

          )
        })
      }
      <button className='btn' onClick={handleClick}>Next</button>

    </div>
  )
}
export default App


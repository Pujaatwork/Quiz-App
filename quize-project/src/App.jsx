// import { useState } from 'react'
import Quiz from './Component/Quiz.json'
import Question from './Component/Question'
import { useState } from 'react'
import Option from './Component/Option'
import './App.css'


function App() {
    // console.log(Quiz)
    const [count, setCount] = useState(0)
    const [selectIndex, setSelectIndex] = useState(null)
    const correctAnswer=Quiz[count].Ans
    const optionClick = (index) => {
        setSelectIndex(index)
        console.log(index);
    }

    const handleClick = () => {

        if (count === 3) {
            setCount(0)
        }
        else {
            setCount(count + 1)
        }

    }
    return (

        <div className='container'>
            <h1>Quiz question</h1>
            <Question question={Quiz[count].Question} />

            {Quiz[count].Option.map((counting, index) => {
                return (
                    <Option key={index} option={counting}selectIndex={selectIndex} optionClick={optionClick} index={index} correctAnswer={correctAnswer} />
                )

            })}
            <button onClick={handleClick}>Next</button>
        </div>
    )
}

export default App

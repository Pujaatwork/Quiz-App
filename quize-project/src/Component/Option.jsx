// function Option({option,index,optionClick,correctAnswer,selectIndex}){
//     const clicked =selectIndex !== null && index === correctAnswer
//     const notIsCorrect=selectIndex === index && selectIndex !== correctAnswer
//     return(
       
//         <div className={clicked ? "green"
//         : notIsCorrect ? "red" : "white"} onClick={()=>optionClick(index)}><p>{option}</p></div>
       
//     )
// }
// export default Option
// import '../CSS/option.css'
const Option = ({ option, currentIndex, clickedOption, selectedOption, currectAnswer }) => {
  return (
    <div className={
      currentIndex === currectAnswer
        ? "green"
        : currentIndex === selectedOption && selectedOption !== currectAnswer
          ? "red"
          : null
    }
      onClick={() => clickedOption(currentIndex)}><p>{option}</p></div>
  )
}
export default Option
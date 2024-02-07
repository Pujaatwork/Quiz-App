function Option({option,index,optionClick,correctAnswer,selectIndex}){
    const clicked =selectIndex !== null && index === correctAnswer
    const notIsCorrect=selectIndex === index && selectIndex !== correctAnswer
    return(
       
        <div className={clicked ? "green"
        : notIsCorrect ? "red" : "white"} onClick={()=>optionClick(index)}><p>{option}</p></div>
       
    )
}
export default Option
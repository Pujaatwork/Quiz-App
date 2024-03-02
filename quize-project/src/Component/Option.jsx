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
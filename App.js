import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const[questionNo,setQuestionNo]=useState(0)
  const[hideQuiz,setHideQuiz]=useState(true)
  const[score,setScore]= useState(0)
  const[selectedOption,setSelectedOption]= useState('')
  const[showScore,setShowScore]=useState(false)
  const[hideResultButton,setHideResultButton]=useState(true)
 
  
  const questions = [
    {
        title :  'what does html stands for ?',
        options: ['Hyperlinks and Text Markup Language',
                  'Hypertext Markup Language',
                  'Home Tool Markup Language'],
        correctOption: "Hypertext Markup Language"
    },
  
  
  
    {
        title: 'Who is making the Web standards?',
        options: ['Google',
                 'The World Wide Web Consortium',
                 'Microsoft'],
        correctOption: "The World Wide Web Consortium"
    },
  
    {
        title: 'What is the correct HTML element for inserting a line break?',
        options :[ 'linebreak',
                   'br',
                   'break'],
        correctOption: "br"
    }
  
  ]
  function nextQuestion(){
    let tempNum = questionNo
    ++tempNum
    setQuestionNo(tempNum)
    let tempScore= score
    selectedOption === questions[questionNo].correctOption&& setScore(+10)
   


  }
  function result(){
    setHideQuiz(false)
    setShowScore(true)
    setHideResultButton(false)


  }
  
  function userSelection(e) {
    setSelectedOption(e.target.value)
  }
  
  const option= questions[questionNo].options
  
  return (
    <div className="App">
      <header className="App-header">

        {  hideQuiz && questions[questionNo].title}

       { hideQuiz && option.map(function(item,index){
        return <div key={index}>  <input  onChange={(e)=>userSelection(e)} type='radio' value={item} name='ql' />  {item}   </div>

})}

{questionNo <questions.length-1 && <button onClick={nextQuestion} >NextQuestion</button> }
{hideResultButton&& questionNo == questions.length-1 &&<button onClick={result}>Result</button>}
{ showScore&& 'Score is' + score }



       











        
      </header>
    </div>
  );
}

export default App;

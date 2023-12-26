import { useState } from 'react'
// import './App.css'

import TopComponents from './components/top-components/TopComponents'
import BottomComponents from './components/bottom-components/BottomComponents'

function App() {
  const MAX_NUMBER = 20;
  const number = Math.trunc(Math.random() * MAX_NUMBER )+ 1;
  
  const [h1, setH1] = useState('?')
  const [inputValue, setInputValue] = useState('');
  const [randomNumber, setRandomNumber] = useState(number);
  const [message, setMessage] = useState(`Enter any number between 1 and ${MAX_NUMBER}`);
  let [score, setScore] = useState(20);
  let [highScore, setHighScore] = useState(0);

  const reset = function() {
    setRandomNumber(number);
    displayMessage(`Enter any number between 1 and ${MAX_NUMBER}`)
    setScore(20);
    setHighScore(0);
    clearInput();
    setH1('?');
  }

  const displayMessage = function(text) {
    setMessage(text);
  }

  const absoluteZero = function(zero = 0) {
    score < 0 && setScore(0);
  }

  const handleCheck = function() {

    if(+inputValue === randomNumber) {
      <h1> {randomNumber} </h1>
      setH1(randomNumber);
      displayMessage('Yay!! correct guess')
      setHighScore(score);

    }
    if(+inputValue !== randomNumber) {
      if(+inputValue <= 0 || +inputValue > MAX_NUMBER) {
        displayMessage(`Enter a number 1 and ${MAX_NUMBER}`);
        setScore(--score);
        absoluteZero();
        return;
      }
      +inputValue > randomNumber ? displayMessage(`Too high`) : displayMessage(`Too low`);
      setScore(--score);
      absoluteZero();
    }
  }

  const getInputValue = function(e) {
    setInputValue(e.target.value)
  };

  const clearInput = () => {
    setInputValue('');
  }

  return (
    <main className='app'>
      <TopComponents tools={{randomNumber, reset, h1, inputValue}} />
      <BottomComponents eventClick={{handleCheck, inputValue, getInputValue, clearInput, message, score, highScore}}/>
    </main>
  )
}

export default App

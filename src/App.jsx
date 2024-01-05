import { useState } from 'react'
// import './App.css'

import TopComponents from './components/top-components/TopComponents'
import BottomComponents from './components/bottom-components/BottomComponents'

function App() {
  const [maxNumber, setMaxNumber ] = useState(20);
  const number = Math.trunc(Math.random() * maxNumber )+ 1;
  
  const [h1, setH1] = useState('?')
  const [inputValue, setInputValue] = useState('');
  const [randomNumber, setRandomNumber] = useState(number);
  const [message, setMessage] = useState(`Enter any number between 1 and ${maxNumber}`);
  let [score, setScore] = useState(20);
  let [highScore, setHighScore] = useState(0);

  let initialScore;
  
  const changeGame = function(num, initialScore) {
    setMaxNumber(num);
    displayMessage(`Enter any number between 1 and ${num}`);
    setMaxNumber(num);
    setH1('?')
    setInputValue('');
    setScore(initialScore);
    return initialScore;
    
  }

  const reset = function() {
    setRandomNumber(number);
    displayMessage(`Enter any number between 1 and ${maxNumber}`)
    setScore(score);
    setHighScore(highScore);
    clearInput();
    setH1('?');
    
  }

  const displayMessage = function(text) {
    setMessage(text);
  }

  const absoluteZero = (zero = 0) => score < 0 && setScore(zero);

  const handleCheck = function() {

    if(+inputValue === randomNumber) {
      <h1> {randomNumber} </h1>
      setH1(randomNumber);
      displayMessage('Yay!! correct guess');
      highScore < score ? setHighScore(score) : highScore;

    }
    if(+inputValue !== randomNumber) {
      if(+inputValue <= 0 || +inputValue > maxNumber) {
        displayMessage(`Enter a number 1 and ${maxNumber}`);
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
      <TopComponents tools={{randomNumber, reset, h1, inputValue, changeGame}} />
      <BottomComponents eventClick={{handleCheck, maxNumber, inputValue, getInputValue, clearInput, message, score, highScore}}/>
    </main>
  )
}

export default App

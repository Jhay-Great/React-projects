import Message from './Message'
import Button from '../Button'
import check from '../../assets/check.svg'

const BottomComponents = function({eventClick}) {
    const {handleCheck, maxNumber, getInputValue, inputValue, message, score, highScore} = eventClick;
    // console.log(message, maxNumber)

    
    return (
        <section className='bottom-component'>
            <div className="input-section">
                <input type="number" onChange={getInputValue} value={inputValue} placeholder='Enter any number...' />
                <Button handleClick={handleCheck} name='Check' svg={check} />

            </div>

            {/* display message section */}
            <div className="display-messages">
                <Message message={message}/>
                <Message message='Score' messageValue={score} />
                <Message message='High score' messageValue={highScore} />
            </div>
        </section>
    )
}

export default BottomComponents
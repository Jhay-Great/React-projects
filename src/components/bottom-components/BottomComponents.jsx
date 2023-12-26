import Message from './Message'
import Button from '../Button'
import check from '../../assets/check.svg'

const BottomComponents = function({eventClick}) {
    const {handleCheck, getInputValue, inputValue, message, score, highScore} = eventClick;

    
    return (
        <section className='bottom-component'>
            <div className="input-section">
                <input type="number" onChange={getInputValue} value={inputValue} />
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
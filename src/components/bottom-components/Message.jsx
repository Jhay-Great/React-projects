const Message = function({message, messageValue}) {

    const displayMessage = messageValue  !== undefined ? <p>{message}: <span>{messageValue}</span></p> : <p>{message}</p>
    return (
        <div>
            {displayMessage}
        </div>
    )
}

export default Message
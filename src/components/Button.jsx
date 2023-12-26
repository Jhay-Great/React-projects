const Button = function({name, classItem, handleClick, svg}) {
    const itemName = classItem || classItem;
    
    return (
        <button className={itemName} onClick={handleClick}> 
            <img src={svg} alt="" />
            <span>
                {name} 
            </span>
        </button>
    )
}

export default Button
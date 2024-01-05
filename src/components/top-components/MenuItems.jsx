const MenuItems = function({ data }) {
    const { clName, changeGame, number, initialScore } = data;
    // console.log(changeGame)
    return (
        <li className={clName} onClick={() => changeGame(number, initialScore)}>1 - { number }</li>
    )
}

export default MenuItems
const MenuItems = function({ menuItem, difficulty }) {
    return (
        <li className={difficulty}>{ menuItem }</li>
    )
}

export default MenuItems
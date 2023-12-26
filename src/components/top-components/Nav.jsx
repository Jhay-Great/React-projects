import Button from '../Button'
import replay from '../../assets/replay2.svg';
import levels from '../../assets/levels.svg';
import MenuItems from './MenuItems';
import { useState } from 'react';

const Nav = function({handleClick}) {

    const [ isToggle, setIsToggle ] = useState(false);

    const toggle = function() {
        isToggle ? setIsToggle(false) : setIsToggle(true);
    }
    
    return (
        <nav>
            <Button handleClick={toggle} classItem='menu-btn' name='Range' svg={levels} />
            <ul className={`menu ${isToggle ? 'visible' : 'hidden'} `}>
                <MenuItems menuItem='1 - 20' difficulty='easy' />
                <MenuItems menuItem='1 - 50' difficulty='medium' />
                <MenuItems menuItem='1 - 100' difficulty='hard' />
            </ul>
            <Button handleClick={handleClick}  name='Play again' svg={replay} />
        </nav>
    )
}

export default Nav
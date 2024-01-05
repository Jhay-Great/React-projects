import Button from '../Button'
import replay from '../../assets/replay2.svg';
import levels from '../../assets/levels.svg';
import MenuItems from './MenuItems';
import { useState } from 'react';


const Nav = function({handleClick}) {
    const {reset, changeGame} = handleClick;

    const [ isToggle, setIsToggle ] = useState(false);

    const toggle = function() {
        isToggle ? setIsToggle(false) : setIsToggle(true);
    }
    // const changeGame = () => console.log('first')
    
    return (
        <nav>
            <Button handleClick={toggle} classItem='menu-btn' name='Range' svg={levels} />
            <ul className={`menu ${isToggle ? 'visible' : 'hidden'} `}>
                <MenuItems data={
                    {
                        initialScore: 20,
                        number: 20,
                        changeGame, 
                        clName: 'easy', 
                    }
                    } />

                <MenuItems data={
                    {
                        initialScore: 15,
                        changeGame,
                        clName: 'medium',
                        number: 50
                    }
                } />

                <MenuItems data={
                    {
                        initialScore: 10,
                        changeGame,
                        clName: 'hard',
                        number: 100
                    }
                } />
            </ul>
            <Button handleClick={reset}  name='Play again' svg={replay} />
        </nav>
    )
}

export default Nav

// const obj = {
//     name: 'joe',
//     person: `${this.name}`;
// }
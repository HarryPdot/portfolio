import './BurgerIcon.css'
import MenuImage from './images/burger-icon.png'
import { GiHamburgerMenu } from 'react-icons/gi'

export default function BurgerIcon({ setNavToggle, navToggle }) {
    const onToggle = () => {
        setNavToggle(!navToggle)
    }

    return (
        <div className='burgericon-container'>
            <GiHamburgerMenu className='burger-icon' onClick={onToggle}/>
        </div>
    )
}
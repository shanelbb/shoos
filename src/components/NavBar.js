// import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'


import Menu from './Menu'

function NavBar({ setCategory }) {
    const [open, setOpen] = useState(false)

    const chosenCategory = (e) => {
        setCategory(e.target.textContent);
    }

    const css = open === true ? { transform: `translateY(0)` } : { transform: `translateY(-500vh)`}

    const toggleMenu = () => {
        open === false ? setOpen(true) : setOpen(false)
    }


    return(
        <nav className="categoryNav">
            <ul className='wrapper navBar'>
                <Link to='/gallery'><li onClick={chosenCategory} className='categoryLi'>New Arrivals</li></Link>
                <Link to='/gallery'><li onClick={chosenCategory} className='categoryLi'>Sneakers</li></Link>
                <Link to='/gallery'><li onClick={chosenCategory} className='categoryLi'>Dress Shoes</li></Link>
                <Link to='/gallery'><li onClick={chosenCategory} className='categoryLi'>Boots</li></Link>
                <li className='hamburger' onClick={toggleMenu}></li>
            </ul>
            <div className="menu" style={css}>
                <Menu chosenCategory={chosenCategory} toggleMenu={toggleMenu}/>
            </div>
                      
        </nav>
    )
}

export default NavBar;
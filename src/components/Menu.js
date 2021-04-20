import { Link } from 'react-router-dom'

const Menu = ({chosenCategory, toggleMenu}) => {

    const handleClick = (e) => {
        chosenCategory(e);
        toggleMenu();
    }
    
 return (
        <>  
            <Link to='/' onClick={toggleMenu}><h4>shoos.</h4></Link>
            <ul>
                <Link to='/gallery'><li onClick={handleClick} className='menuLi'>New Arrivals</li></Link>
                <Link to='/gallery'><li onClick={handleClick} className='menuLi'>Sneakers</li></Link>
                <Link to='/gallery'><li onClick={handleClick} className='menuLi'>Dress Shoes</li></Link>
                <Link to='/gallery'><li onClick={handleClick} className='menuLi'>Boots</li></Link>
                <li className='menuLi' onClick={toggleMenu}>About Us</li>
                <li className='menuLi'onClick={toggleMenu}>Contact Us</li>
            </ul>
        </>
    )
}

export default Menu

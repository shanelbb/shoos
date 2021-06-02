import ShopBag from '../assets/shopping-bag.png'
import NavBar from './NavBar'
import ShoppingBag from './ShoppingBag';
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Header({setCategory, bagQty, shoeData}) {
    const [open, setOpen] = useState(false)

    const css = open === true ? { transform: `translateY(0)` } : { transform: `translateY(-500vh)`}

    const toggleMenu = () => {
        open === false ? setOpen(true) : setOpen(false)
    }

    return(
        <header>
            <div className="topBar wrapper">
                <Link to='/'><h1>shoos.</h1></Link>
                <div className="shoppingBagIcon" onClick={toggleMenu}>
                    <img src={ShopBag} alt="Shopping bag icon" className='shopping'/>
                    <span className='bagQty'>{bagQty}</span>
                </div>
            </div>
            <NavBar setCategory={setCategory}/>
            <ShoppingBag shoeData={shoeData} css={css}/>

        </header>
    )
}

export default Header;
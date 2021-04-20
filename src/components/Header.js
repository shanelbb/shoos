import ShopBag from '../assets/shopping-bag.png'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'

function Header({setCategory, bagQty}) {
    return(
        <header>
            <div className="topBar wrapper">
                <Link to='/'><h1>shoos.</h1></Link>
                <div className="shoppingBag">
                    <img src={ShopBag} alt="Shopping bag icon" className='shopping'/>
                    <span className='bagQty'>{bagQty}</span>
                </div>
            </div>
            <NavBar setCategory={setCategory}/>
        </header>
    )
}

export default Header;
import {Link} from 'react-router-dom'

function LandingPage({setCategory}) {
    const chosenCategory = (e) => {
        setCategory(e.target.textContent);
    }

    return (
    <>
       
        <div className="banner landingBanner1">
            <Link to='/gallery' onClick={chosenCategory}>
                <h2>New Arrivals</h2>  
            </Link>
        </div>
      
        <div className="banner landingBanner2">
            <Link to='/gallery' onClick={chosenCategory}>
            <h2>Sneakers</h2>
            </Link>
        </div>
        <div className="banner landingBanner3">
            <Link to='/gallery' onClick={chosenCategory}>
            <h2>Dress Shoes</h2>
            </Link>
        </div>
        <div className="banner landingBanner4">
            <Link to='/gallery' onClick={chosenCategory}>
            <h2>Boots</h2>
            </Link>
        </div>
    </>
    )
}

export default LandingPage;
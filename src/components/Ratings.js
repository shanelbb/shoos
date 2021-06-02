import whiteStar from '../assets/whiteStar.png'
import blackStar from '../assets/blackStar.png'

function Ratings({userRating, setUserRating, isDisabled, setIsDisabled}) {
        
    const handleClick = (num) => {
    setUserRating(num)
    setIsDisabled(true)
    }

    return(
       <div className="rating">
            <button  disabled={isDisabled} onClick={() => handleClick(1)}><img  src={userRating > 0 ? blackStar : whiteStar } alt="star" className='star' id='oneStar'/></button>
            <button disabled={isDisabled} onClick={() => handleClick(2)}><img  src={userRating > 1 ? blackStar : whiteStar } alt="star" className='star' id='twoStar'/></button>
            <button disabled={isDisabled} onClick={() => handleClick(3)}><img  src={userRating > 2? blackStar : whiteStar } alt="star" className='star' id='threeStar'/></button>
            <button disabled={isDisabled} onClick={() => handleClick(4)}><img  src={userRating > 3? blackStar : whiteStar } alt="star" className='star' id='fourStar'/></button>
            <button disabled={isDisabled} onClick={() => handleClick(5)}><img  src={userRating > 4? blackStar : whiteStar } alt="star" className='star' id='fiveStar'/></button>
       </div>
    )
}

export default Ratings;
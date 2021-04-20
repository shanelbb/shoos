import { useState } from 'react'
import whiteStar from '../assets/whiteStar.png'
import blackStar from '../assets/blackStar.png'

function Ratings() {
    const [rating, setRating] = useState(0);
    const [numRatings, setNumRatings] = useState(0)
    const [avgRating, setAvgRating] = useState(0)

    const handleClick = (num) => {
        setNumRatings(numRatings + 1)
        console.log(numRatings);
        setRating(rating + num)
        console.log(rating);
        setAvgRating(rating / numRatings);
        console.log(avgRating);
    }
    return(
       <div className="rating">
          <ul>
              <li onClick={() => handleClick(1)}><img  src={avgRating > 0.5 ? blackStar : whiteStar } alt="" className='star' id='oneStar'/></li>
              <li onClick={() => handleClick(2)}><img  src={avgRating > 1.5 ? blackStar : whiteStar } alt="" className='star' id='twoStar'/></li>
              <li onClick={() => handleClick(3)}><img  src={avgRating > 2.5 ? blackStar : whiteStar } alt="" className='star' id='threeStar'/></li>
              <li onClick={() => handleClick(4)}><img  src={avgRating > 3.5 ? blackStar : whiteStar } alt="" className='star' id='fourStar'/></li>
              <li onClick={() => handleClick(5)}><img  src={avgRating > 4.5 ? blackStar : whiteStar } alt="" className='star' id='fiveStar'/></li>
          </ul>
       </div>
    )
}

export default Ratings;
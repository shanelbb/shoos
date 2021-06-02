import whiteStar from '../assets/whiteStar.png'
import blackStar from '../assets/blackStar.png'

const AvgRating = () => {
    return (
        <div className="rating">
            
                <button><img  src={5 > 0.5 ? blackStar : whiteStar } alt="star" className='star' id='oneStar'/></button>
                <button><img  src={5 > 1.5 ? blackStar : whiteStar } alt="star" className='star' id='twoStar'/></button>
                <button><img  src={5 > 2.5 ? blackStar : whiteStar } alt="star" className='star' id='threeStar'/></button>
                <button><img  src={5 > 3.5 ? blackStar : whiteStar } alt="star" className='star' id='fourStar'/></button>
                <button><img  src={5 > 4.5 ? blackStar : whiteStar } alt="star" className='star' id='fiveStar'/></button>
            
        </div>
    )
}

export default AvgRating

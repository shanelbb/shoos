import Ratings from './Ratings'
import SizeDropdown from './SizeDropdown'
import QtyDropdown from './QtyDropdown'
import close from '../assets/close.png'

function ShoeModal({modalClass, setModalClass, modalShoeData}) {

    const closeModal = () => {
        setModalClass('shoeModal')
    }

    return (
        <div className={modalClass}>
            <div className="modalContent">
                <img onClick={closeModal} className='close' src={close} alt="Close button"/>
                <img onClick={closeModal} className="modalImg shoeImg" src={modalShoeData.image} alt={modalShoeData.style} />
                <div className="modalTopText">
                    <p className="brand">{modalShoeData.brand}</p>
                    <p className="price">${modalShoeData.price}</p>
                </div>
                <div className="modalBottomText">
                    <p className="style">{modalShoeData.style}</p>
                    <div className='modalRating'>
                    <p>Your Rating: </p>
                    <Ratings />
                    </div>
                </div>
                <div className="modalDropdowns">
                    <SizeDropdown />
                    <QtyDropdown />
                    <button className='addToBag'>Add To Bag</button>
                </div>
            </div>
        </div>
    )
}

export default ShoeModal

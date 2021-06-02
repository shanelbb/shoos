import SizeDropdown from './SizeDropdown'
import QtyDropdown from './QtyDropdown'
import close from '../assets/close.png'


function ShoeModal({modalClass, setModalClass, modalShoeData, addShoeToBag, shoeToAdd, setShoeToAdd, quantity, setQuantity, selectedSize, setSelectedSize}) {

    const closeModal = () => {
        setModalClass('shoeModal')
    }

    const addShoeOnChange = () => {
        setShoeToAdd({
            brand: modalShoeData.brand,
            style: modalShoeData.style,
            price: modalShoeData.price,
            image: modalShoeData.image,
            size: selectedSize,
            quantity: quantity
        })
    }

    const addingShoe = () => {
        if(shoeToAdd.quantity) {
            addShoeToBag(shoeToAdd)
            setShoeToAdd({})
        } 
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
                </div>
                <div className="modalDropdowns">
                    <SizeDropdown setSelectedSize={setSelectedSize}/>
                    <QtyDropdown 
                    setQuantity={setQuantity}
                    addShoeOnChange={addShoeOnChange}
                    />
                    <button onClick={addingShoe} className='addToBag'>Add To Bag</button>
                </div>
            </div>
        </div>
    )
}

export default ShoeModal

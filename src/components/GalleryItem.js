import SizeDropdown from './SizeDropdown';
import QtyDropdown from './QtyDropdown';

function GalleryItem({ shoe, openModal, quantity, setModalShoeData, category, addShoeToBag, shoeToAdd, setShoeToAdd, setQuantity, selectedSize, setSelectedSize }) {
   
    const selectedShoe = () => {
        setModalShoeData({ brand: shoe.brand, style: shoe.style, price: shoe.price, image: shoe.image})
        openModal()
    }

    const addShoeOnChange = () => {
        console.log(shoeToAdd);
        setShoeToAdd({
            brand: shoe.brand,
            style: shoe.style,
            price: shoe.price,
            image: shoe.image,
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

    const lowerCategory = category.toLowerCase();
    
    return(
    <>           
        { shoe.category === lowerCategory || (shoe.newArrival === true && shoe.subCategory === lowerCategory) ?
          (<div className="galleryItem">
             <p className="brand">{shoe.brand}</p>
             <p className="style">{shoe.style}</p>
             <img onClick={selectedShoe} className='shoeImg' src={shoe.image} alt={shoe.style}/>
             <p className="price">${shoe.price}</p>
             <div className='dropdowns'>
             <SizeDropdown 
             setSelectedSize={setSelectedSize}/>
             <QtyDropdown 
             setQuantity={setQuantity}
             addShoeOnChange={addShoeOnChange}/>
             </div>
             <button onClick={addingShoe} className='addToBag galleryAdd'>Add To Bag</button>
             
        </div> ) : null}  
    </>
    )
}

export default GalleryItem;
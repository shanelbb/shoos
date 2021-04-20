import Ratings from './Ratings';
import SizeDropdown from './SizeDropdown';
import QtyDropdown from './QtyDropdown';

function GalleryItem({ shoe, openModal, setModalShoeData, category, addShoeToBag, setQuantity }) {
    const selectedShoe = () => {
        setModalShoeData({ brand: shoe.brand, style: shoe.style, price: shoe.price, image: shoe.image})
        openModal()
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
             <Ratings />
             <div className='dropdowns'>
             <SizeDropdown />
             <QtyDropdown setQuantity={setQuantity}/>
             </div>
             <button onClick={addShoeToBag} className='addToBag galleryAdd'>Add To Bag</button>
             
        </div> ) : null}  
    </>
    )
}

export default GalleryItem;
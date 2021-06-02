import {useState} from 'react'
import Category from './Category';
import GalleryItem from './GalleryItem'
import ShoeModal from './ShoeModal'

function Gallery ({shoeInfo, category, addShoeToBag, quantity, setQuantity}) {
    const [modalClass, setModalClass] = useState('shoeModal');
    const [modalShoeData, setModalShoeData] = useState({});
    const [selectedSize, setSelectedSize] = useState('6')
    const [shoeToAdd, setShoeToAdd] = useState({})


   const openModal = () => {
      setModalClass('open shoeModal')
   }

    return (
        <>
            <Category category={category}/>
            <div className="gallery wrapper">
                {shoeInfo.map((shoe, index) => {
                return  <GalleryItem  
                shoe={shoe} 
                openModal={openModal} 
                modalShoeData={modalShoeData}
                setModalShoeData={setModalShoeData} 
                category={category} 
                shoeToAdd={shoeToAdd}                
                setShoeToAdd={setShoeToAdd}
                addShoeToBag={addShoeToBag}
                selectedSize={selectedSize}
                setSelectedSize={setSelectedSize}
                quantity={quantity}
                setQuantity={setQuantity}
                key={index}
                />
                })}
                <ShoeModal 
                modalClass={modalClass} 
                setModalClass={setModalClass} 
                modalShoeData={modalShoeData}
                shoeToAdd={shoeToAdd}
                setShoeToAdd={setShoeToAdd}
                addShoeToBag={addShoeToBag}
                selectedSize={selectedSize}
                setSelectedSize={setSelectedSize}
                quantity={quantity}
                setQuantity={setQuantity}/>

            </div>
        </>    

    )
    
}

export default Gallery;
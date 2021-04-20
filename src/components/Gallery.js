import {useState} from 'react'
import Category from './Category';
import GalleryItem from './GalleryItem'
import ShoeModal from './ShoeModal'

function Gallery ({shoeInfo, category, addShoeToBag, setQuantity}) {
    const [modalClass, setModalClass] = useState('shoeModal');
    const [modalShoeData, setModalShoeData] = useState({})

   const openModal = () => {
      setModalClass('open shoeModal')
   }
    return (
        <>
            <Category category={category}/>
            <div className="gallery wrapper">
                {shoeInfo.map((shoe) => {
                return  <GalleryItem  
                shoe={shoe} 
                openModal={openModal} 
                setModalShoeData={setModalShoeData} category={category} 
                addShoeToBag={addShoeToBag}
                setQuantity={setQuantity}
                />
                })}
                <ShoeModal 
                modalClass={modalClass} 
                setModalClass={setModalClass} modalShoeData={modalShoeData}
                addShoeToBag={addShoeToBag}
                setQuantity={setQuantity}/>
            </div>
        </>    

    )
    
}

export default Gallery;
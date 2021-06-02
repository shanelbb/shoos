import {useState} from 'react';
import { 
  BrowserRouter as Router, 
  Route
} from 'react-router-dom';
import Header from './components/Header'
import LandingPage from './components/LandingPage'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import shoeInfo from './shoeInfo'

import './App.css';

function App() {
const [category, setCategory] = useState('New Arrivals');
const [bagQty, setBagQty] = useState(0)
const [quantity, setQuantity] = useState(0)
const [shoeData, setShoeData] = useState([])

const addShoeToBag = (addedShoe) => {
  const bagQtyNum = parseInt(bagQty);
  const quantityNum = parseInt(quantity);
  
  setBagQty(bagQtyNum + quantityNum);

  const newShoeData = [...shoeData];
  newShoeData.push(addedShoe) 

  setShoeData(newShoeData)
}

  return (
    <Router>
      <div className='outerWrapper'>
        <Header setCategory={setCategory} bagQty={bagQty} shoeData={shoeData}/>
        <main>
          <Route exact path='/' render={() => <LandingPage setCategory={setCategory}/>} />
      
          <Route path='/gallery' 
          render={ () => <Gallery 
            shoeInfo={shoeInfo} 
            category={category} 
            addShoeToBag={addShoeToBag}
            quantity={quantity}
            setQuantity={setQuantity}/> }
          />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

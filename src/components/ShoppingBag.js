

const ShoppingBag = ({css, shoeData}) => {

    return (
        <div className='shoppingBag' style={css}>
            <h4>shoos.</h4>
            <div className="shoppingContent">
                <h5>Shopping Bag</h5>
                {shoeData !== [] ? 
                    (shoeData.map((shoe, index) => {
                    return (<div className='shoppingContentItem' key={index}>
                        <img src={shoe.image} alt=""/>
                        <div>
                            <p className='brand'>{shoe.brand}</p>
                            <p className='style'>{shoe.style}</p>
                            <p className='size'>Size: {shoe.size}</p>
                        </div>
                        <div>
                            <p className='qty'>Qty</p>
                            <p className='price'>Price</p>
                        </div>
                        <div>
                            <p className='qty qtyNum'>{shoe.quantity}</p>
                            <p className='price'>{shoe.price}</p>
                        </div>
                    </div>)}))
                    :
                    (<p>Your Shopping Bag is Empty</p>)                
                }
                <div className="total">
                    <p>Total:</p>
                    <p>$100.00</p>
                </div>
            </div>
            <div className="shoppingBtns">
                <button>Checkout</button>
                <button>Continue Shopping</button>
            </div>
        </div>
    )
}

export default ShoppingBag

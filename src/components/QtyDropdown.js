
function QtyDropdown({ setQuantity }) {
    const howMany = (e) => {
        setQuantity(e.target.value);
    }
    return(
        <form action="" className='selects'>
            <label htmlFor="qty">Qty</label>
            <select onChange={howMany} name="qty" id="qty">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
            </select>
        </form>
    )
}

export default QtyDropdown;
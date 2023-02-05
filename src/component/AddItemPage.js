import React from 'react';
import "./AddItemPage.css";

const AddItemPage= () =>{
    return(
        <div className='cover'>
            <h1>Add Item</h1>
            <input type="image" />
            <input type="text" placeholder="Item Name" />
            <input type="text" placeholder="Quantity" />
            <input type="text" placeholder="Base Price" />
            <p>Auction Expiry</p>
            <input type="datetime-local" placeholder="Expiry" />
            <div className="AddItem"
            onClick={() => alert(
                'Add Item Clicked !')}>Add Item</div>


        </div>
    )
}

export default AddItemPage; 
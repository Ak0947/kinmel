import React from 'react';
import "./AddItemPage.css"
import Navbar from './Navbar';

const AddItemPage= () =>{
    return(
        <div>

             <Navbar title="Kinmel"/>
        <div className='cover' align='center'>
            <h1>Add Item</h1>
    
            <input type="text" placeholder="Item Name" style={{height:20, width:400}} />
            <input type='image' placeholder='Image' style={{height:30, width:400}}/>
            <input type="number" min="1" placeholder="Quantity (kg)" style={{height:20, width:400}} />
            <input type="number" min="1" placeholder="Base Price (Rs)" style={{height:20, width:400}}/>
                <p>Auction Expiry :<input type="datetime-local" placeholder="Expiry"style={{height:20, width:285}} />
                </p>
            <input type="text" placeholder="Location" style={{height:20, width:400}}/>
            <input type="text" placeholder="Description" style={{height:20, width:400}}/>
            <div className="AddItem"
            onClick={() => alert(
                'Add Item Clicked !')}>Add Item</div>
{/* <h1>Hello</h1> */}

        </div>
                </div>
    )
}

export default AddItemPage; 
import { Component } from "react";
const AddItemButton = () => {
    return (
        <button
            onClick={() => alert(
                'Add Item Button Clicked')}
        >Add Item</button>
    )
}

export default AddItemButton;

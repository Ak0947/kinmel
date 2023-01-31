import React from'react';
import Card from './Card';

const CardList= ({ Items }) => {
    const cardArray=Items.map((user,i) => {
        return (
            <Card key={i} 
            id={Items[i].id} 
            image={Items[i].image} 
            name={Items[i].name} 
            quantity={Items[i].quantity} 
            price={Items[i].price} 
            auctionTime={Items[i].auctionTime}/>)
    })
    return(
        cardArray
    );
}
export default CardList;
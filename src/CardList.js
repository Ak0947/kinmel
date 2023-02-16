import { forwardRef, useImperativeHandle } from 'react';
import React from'react';
import Card from './Card';
import { useState } from 'react';

const CardList= ({ Items }) => {
  

    // useImperativeHandle(ref, ()=> ({
    //     HandleClick
    // }))
    // let j=0;
    // const HandleClick=()=>{

    //     j=i+1;
    //     console.log(j);
    // }

    // handleClick(id)
    // {
    //     console.log(id);
    // }
    // handlearg=()=>{
    //     handleClick(this.Items.id)
    // }
    const cardArray=Items.map((user,i) => {
        return (


            <Card key={i} 
            id={Items[i].id} 
            image={Items[i].image} 
            name={Items[i].name} 
            quantity={Items[i].quantity} 
            price={Items[i].price} 
            // description={Items[i].description}
            auctionTime={Items[i].auctionTime}
            />
    
    
          )
    })
    return(
        cardArray
    );
}
export default CardList;

import React from 'react';

const Card=(props) => {
    return(
            <div className='bg-light-green dib br3 pa3 ma2 grow bw3 shadow-3'  onClick={() => alert(
                'Its Clicked !')}>
                <img alt='Item' src={props.image} 
                style={{ width: 200, height: 200 }}/>
                <div>
                    <h1>            {props.name}</h1>
                    <p>Quantity:    {props.quantity}</p>
                    <p>Price:       {props.price}</p>
                    <p>Auction Time:{props.auctionTime}</p>
                </div>
            </div>
    );
}

export default Card;
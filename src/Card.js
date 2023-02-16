import React from 'react';
import { Link } from 'react-router-dom';

const Card=(props) => {
  
    return(

        
        <div className='bg-light-green dib br3 pa3 ma2 bw3 grow shadow-3'>
          
            <Link to={"/description/" + props.id}> 
                <img alt='Item' src={props.image} 
                style={{ width: 200, height: 200 }}/>
                <div>
                    <h1>            {props.name}</h1>
                    <p>Quantity:    {props.quantity}</p>
                    <p>Price:       {props.price}</p>
                    <p>{props.description}</p>
                    <p>Auction Time:{props.auctionTime}</p>
                </div>

</Link>

{/*    
<input type="number" placeholder="Bidding price (Rs)"/>
                <button>
                    Bid
                </button> */}
                </div>
    );
}

export default Card;
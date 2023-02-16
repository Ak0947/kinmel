import React from "react";
import { useRef } from "react";
import CardList from "./CardList";
import Card from "./Card";
import { Items } from "./Items";
import {useParams} from "react-router-dom";
import Navbar from "./component/Navbar";
import CustomerReviewPage from "./Review";

const Description =() => {

const {id} = useParams()

let i = id-1;

    // const CardListRef = useRef();

    // const ABC =() => CardListRef.current.HandleClick

    return (

    //     <div>
            
    //     <h1>Item Description</h1>
         
    //     <Card 
    //         id={Items[1].id} 
    //         image={Items[1].image} 
    //         name={Items[1].name} 
    //         quantity={Items[1].quantity} 
    //         price={Items[1].price} 
    //         auctionTime={Items[1].auctionTime}/>
      

    //     </div>

    <div>
         <Navbar title="Kinmel"/>
          <h1 align='center'>{Items[i].name}</h1>

    {/* <Card key={i} 
            id={Items[i].id} 
            image={Items[i].image} 
            name={Items[i].name} 
            quantity={Items[i].quantity} 
            price={Items[i].price} 
            description={Items[i].description}
            auctionTime={Items[i].auctionTime}
            /> */}
        <img alt="aaaa" src={Items[i].image} style={{height:400, width:400}} align='left' className="container " />
        {/* <h1 align='left'>{Items[i].name}</h1> */}


        <h3 align='left'>Quantity: {Items[i].quantity}</h3> 
        <h3 align='left'>Price: {Items[i].price}</h3>
        <h3 align='left'>Time: {Items[i].auctionTime}</h3>
        <h3 align='left'>Location: {Items[i].location}</h3>
        <div className="container" align='left'>

<input type="number" placeholder="Bidding price (Rs)" style={{height:40, width:300}} />
                <button style={{height:40, width:80, backgroundColor:"blueviolet", color:"white"}}>
                    Bid
                </button> 
        </div>

        <h3 align='left'>Description: <br/>{Items[i].description}</h3>

        <CustomerReviewPage/>

          </div>

    );
}



export default Description;
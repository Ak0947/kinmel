

import React, { useTransition } from "react";
import { useState } from "react";
import { Items } from "./Items";
import { Link } from "react-router-dom";


const Search = () => {
  const [Query, setQuery]= useState("");

 const setValue = (e) => {
    setQuery(e.target.value);

 }
function Listcondition(){

  
//   function LC(){
//     if(D==1)
//   {
//     return(
//        <ul className="list">
//     {Items.filter((item)=>item.name.toLowerCase().includes(Query)).map((item)=>(
//       <li key={item.id} className="listitem">{item.name}</li>
//     ))}
//    </ul> 
//   )
//  if(Query == ''){
//   return(
//     <div></div>
//   )
//  }
// }
//   }

//   return LC();
if(Query == '')
{
  return(
    <></>
  )
}
else{
  return(
      <ul className="list">
    {Items.filter((item)=>item.name.toLowerCase().includes(Query)).map((item)=>(
      <li key={item.id} className="listitem">
          <Link to={"/description/" + item.id}> {item.name}</Link>
        </li>
    ))}
   </ul> 
  )
}
 
}
  return(
    <div>
  
        <input type="text"  placeholder="Search Here"
        className="Search" onChange={(e) => setValue(e)}/>
   {/* <ul className="list">
    {Items.filter((item)=>item.name.toLowerCase().includes(Query)).map((item)=>(
      <li key={item.id} className="listitem">{item.name}</li>
    ))}
   </ul> */}
<Listcondition/>
    </div>
  )
}

export default Search;
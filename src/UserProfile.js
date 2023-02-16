import React from 'react'
import { Users } from './User'
import { useNavigate } from 'react-router-dom'

export const UserProfile = () => {
  let id = localStorage.getItem("currentUserId")
  // const navigate = useNavigate()
  // if (!id) {
  //   navigate("/")
  //   return
  // }

  let i = id-1;
  console.log(i);
  return (
    <div>
         <h3 align='left'>Name: {Users[i].name}</h3> 
        <h3 align='left'>Email: {Users[i].Email}</h3>
        <h3 align='left'>User Name: {Users[i].username}</h3>
        <img align='left' alt='Image' src={Users[i].image}/> 
        {/* <h3 align='left'>Location: {Items[i].location}</h3>
        <div className="container" align='left'></div> */}
    </div>
  )
}


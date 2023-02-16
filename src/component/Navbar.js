import React from 'react'
// import {Routes, Route, useNavigate, Link} from 'react-router-dom';
import Search from '../Search';
// import { Items } from '../Items';
import { Link } from 'react-router-dom';
import { Users } from '../User';

export default function Navbar(props) {
  
  let id = localStorage.getItem("checkId")
  function Log(){
    if(id=='1'){
      return (
        
        <li className="nav-item">
          <a className="nav-link" href='/Logout'>Logout</a>
        </li>

      )
    }
    else{
      return(
     
        <li className="nav-item">
          <a className="nav-link" href='/Login'>Login</a>
        </li>
       
      )
    }
  }

 

  function Reg(){
    if(id=='1'){
      return 
    }
    else{
      return(
     
        <li><a className="nav-link" href='/registration'>Register</a></li>
      )
    }
  }

  return (
    <div className="container" >
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
   
    <a className="navbar-brand" href='/'>{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href='/'>Home</a>
        </li>
 <Log/> 
  <Reg/>    
        <li><a className="nav-link" href='/item'>Add Items</a></li>
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href='/' role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href='/'>Action</a></li>
            <li><a className="dropdown-item" href='/'>Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href='/'>Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li> */}
        
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" style={{height:40,width:300}}  type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success"  style={{height:40,width:100}} type="submit">Search</button>
      </form>  */}
      <></>
{/* <Search details={Items}/>  */}
<Search/>
    </div>
  </div>
</nav>
</div>
  )
}

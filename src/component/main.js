// import { Link, Route, Routes } from "react-router-dom";
// import {Items} from '../Items';
// import CardList from "../CardList";
// import SearchBox from "../searchBox";



// function Main(){
  
//     return(
//         <div>
//             <h1> Kinmel </h1>
        
//           <Link to ="/item">
//             <button>ADD</button></Link>
//             <Link to="/login">
//                 <button>Login</button>
//             </Link>
//             <Link to="/registration">
//                 <button>Register</button>
//             </Link>
//             <SearchBox/>
//             <CardList Items={Items}/>
        
//         </div>
//     );
// }

// export default Main;

import { Link, Route, Routes, useNavigate } from "react-router-dom";
import {Items} from '../Items';
import CardList from "../CardList";
import Navbar from "./Navbar";
import Search from "../Search";
import CustomerReviewPage from "../Review";
import { UserProfile } from "../UserProfile";
import { useParams } from "react-router-dom";
import { Users } from "../User";


function Main(){
  let id1 = localStorage.getItem("currentUserId")
 
  function Check(){
    if (id1=='a') {
    return(

      <h1>Profile</h1>
     )
  }
  else{
    return(
      <Link to ='/User Profile'>
      <h1>{Users[id1-1].name}</h1>
    </Link>
    )
  }
  }

  // let id = localStorage.getItem("currentUserId")
  // const navigate = useNavigate()
  // function Check(){
  //   if (id=='a') {
  //   return(

  //     <h1>Profile</h1>
  //    )
  // }
  // else{
  //   return(
  //     <Link to ='/User Profile'>
  //     <h1>{Users[id-1].name}</h1>
  //   </Link>
  //   )
  // }
  // }

    return(
        <div>
            {/* <h1> Kinmel </h1> */}
           
          {/* <Link to ="/item">
            <button>ADD</button></Link>
            <Link to="/login">
                <button>Login</button>
            </Link>
            <Link to="/registration">
                <button>Register</button>
            </Link> */}
            {/* <form className="d-flex" role="search">
        <input className="form-control me-2" style={{height:40,width:200}}  type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success"  style={{height:40,width:100}} type="submit">Search</button>
      </form>  */}
      {/* <Link to ='/User Profile'>
        <h1>{Users[id-1].name}</h1>
      </Link> */}


      <Navbar title="Kinmel"/>
      <Check/> 
       {/* <Search/>  */}
            <CardList Items={Items}/>

        
        </div>
    );
}

export default Main;
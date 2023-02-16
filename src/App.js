// import React from 'react';
// import CardList from './CardList';
// import {Routes, Route, useNavigate, Link} from 'react-router-dom';
// import { Component } from "react";
// import {Items} from './Items';
// import SearchBox from './searchBox';
// // import AddItemButton from './AddItemButton';
// import AddItemPage from './component/AddItemPage';
// import Main from './component/main';
// import LoginPage from './component/LoginPage';
// import RegistrationPage from './component/RegistrationPage';
// import Login from './Login';
// import Description from './Description';


// class App extends Component {
//     constructor(){
//         super()
//         this.state ={
//             Items: Items,
//             searchfield:''
//         }
//     }
//     render (){
//     return(
//         <div className='tc'>
      
           
//       <Link to="/"><button>Home</button></Link>
//             <Routes>
//                 <Route path='/' element={<Main/>}></Route>
//                 <Route path='/item' element={<AddItemPage></AddItemPage>}></Route>
//                 <Route path='/login' element={<Login></Login>}></Route>
//                 <Route path='/registration' element={<RegistrationPage></RegistrationPage>}></Route>
//                 <Route path='/description' element={<Description ></Description>}></Route>
//             </Routes>
//             <div>
                
//             </div>
            
//         </div>
//     );
// }
// }
// export default App;


import React from 'react';
import CardList from './CardList';
import {Routes, Route, useNavigate, Link} from 'react-router-dom';
import { Component } from "react";

// import AddItemButton from './AddItemButton';
import AddItemPage from './component/AddItemPage';
import Main from './component/main';
import LoginPage from './component/LoginPage';
import RegistrationPage from './component/RegistrationPage';
import Login from './Login';
import Description from './Description';
import Navbar from './component/Navbar';
import { UserProfile } from './UserProfile';
import { Logout } from './Logout';


const App  =()=>{
    let id = localStorage.getItem("checkId")
    if(id=='0'){
        localStorage.setItem("currentUserId", 'a');
        localStorage.setItem("checkId", '0');
    }
    return(
        <div className='tc'>
      
{/*            *
      <Link to="/"> 
       </Link> */}
      
    
            <Routes>
                <Route path='/' element={<Main/>}></Route>
                <Route path='/item' element={<AddItemPage></AddItemPage>}></Route>
                <Route path='/login' element={<Login></Login>}></Route>
                <Route path='/registration' element={<RegistrationPage></RegistrationPage>}></Route>
                <Route path='/description/:id' element={<Description ></Description>}></Route>
                <Route path='/User Profile/' element={<UserProfile></UserProfile>}></Route>
                <Route path='/Logout/' element={<Logout></Logout>}></Route>
            </Routes>
            <div>
                
            </div>
            
        </div>
    );
}
export default App;


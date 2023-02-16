// // import React from 'react';
// // import "./RegistrationPage.css"

// // const RegistrationPage= () =>{
// //     return(
// //         <div className='cover'>
// //             <h1>Registration</h1>
// //             <input type="text" placeholder="First Name" />
// //             <input type="text" placeholder="Middle Name" />
// //             <input type="text" placeholder="Last Name" />
// //             <input type="text" placeholder="address" />
// //             <input type="tel" placeholder="phone number" />
// //             <input type="email" placeholder="email" />
// //             <input type="text" placeholder="create username" />
// //             <input type="password" placeholder="create password" />
// //             <input type="date" placeholder="Date of Birth" />

// //             <div className="Register"
// //             onClick={() => alert(
// //                 'Its Clicked !')}>Register</div>
// //         </div>
// //     )
// // }

// // export default RegistrationPage;

// import { useState } from 'react';
// import './RegistrationPage.css';

// export default function RegistrationPage() {

// // States for registration
// const [name, setName] = useState('');
// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');

// // States for checking the errors
// const [submitted, setSubmitted] = useState(false);
// const [error, setError] = useState(false);

// // Handling the name change
// const handleName = (e) => {
// 	setName(e.target.value);
// 	setSubmitted(false);
// };

// // Handling the email change
// const handleEmail = (e) => {
// 	setEmail(e.target.value);
// 	setSubmitted(false);
// };

// // Handling the password change
// const handlePassword = (e) => {
// 	setPassword(e.target.value);
// 	setSubmitted(false);
// };

// // Handling the form submission
// const handleSubmit = (e) => {
// 	e.preventDefault();
// 	if (name === '' || email === '' || password === '') {
// 	setError(true);
// 	} else {
// 	setSubmitted(true);
// 	setError(false);
// 	}
// };

// // Showing success message
// const successMessage = () => {
// 	return (
// 	<div
// 		className="success"
// 		style={{
// 		display: submitted ? '' : 'none',
// 		}}>
// 		<h1>User {name} successfully registered!!</h1>
// 	</div>
// 	);
// };

// // Showing error message if error is true
// const errorMessage = () => {
// 	return (
// 	<div
// 		className="error"
// 		style={{
// 		display: error ? '' : 'none',
// 		}}>
// 		<h1>Please enter all the fields</h1>
// 	</div>
// 	);
// };

// return (


//     <div className="App">
// 	<div>
// 		<h1>User Registration</h1>
// 	</div>

// 	{/* Calling to the methods */}
// 	<div className="messages">
// 		{errorMessage()}
// 		{successMessage()}
// 	</div>

// 	<form>
// 		{/* Labels and inputs for form data */}
// 		<label className="label">Name</label>
// 		<input onChange={handleName} className="input"
// 		value={name} type="text" />

// 		<label className="label">Email</label>
// 		<input onChange={handleEmail} className="input"
// 		value={email} type="email" />

// 		<label className="label">Password</label>
// 		<input onChange={handlePassword} className="input"
// 		value={password} type="password" />

// 		<button onClick={handleSubmit} className="btn" type="submit">
// 		Submit
// 		</button>
// 	</form>
// 	</div>
     
// );
// }
// import React, {useState,setState} from 'react';
// import './RegistrationPage.css'
// function RegistrationPage() {
    
//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password,setPassword] = useState('');
//     const [confirmPassword,setConfirmPassword] = useState('');

//     const handleInputChange = (e) => {
//         const {id , value} = e.target;
//         if(id === "firstName"){
//             setFirstName(value);
//         }
//         if(id === "lastName"){
//             setLastName(value);
//         }
//         if(id === "email"){
//             setEmail(value);
//         }
//         if(id === "password"){
//             setPassword(value);
//         }
//         if(id === "confirmPassword"){
//             setConfirmPassword(value);
//         }

//     }

//     const handleSubmit  = () => {
//         console.log(firstName,lastName,email,password,confirmPassword);
//     }

//     return(
//         <div className='body'>

//         <form className="form" onSubmit={handleSubmit}>
//             <div className="form-body">
//                 <div className="username">
//                     <label className="form__label" htmlFor="firstName">First Name </label>
//                     <input className="form__input" type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="First Name"/>
//                 </div>
//                 <div className="lastname">
//                     <label className="form__label" htmlFor="lastName">Last Name </label>
//                     <input  type="text" name="" id="lastName" value={lastName}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="LastName"/>
//                 </div>
//                 <div className="email">
//                     <label className="form__label" htmlFor="email">Email </label>
//                     <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
//                 </div>
//                 <div className="password">
//                     <label className="form__label" htmlFor="password">Password </label>
//                     <input className="form__input" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
//                 </div>
//                 <div className="confirm-password">
//                     <label className="form__label" htmlFor="confirmPassword">Confirm Password </label>
//                     <input className="form__input" type="password" id="confirmPassword" value={confirmPassword} onChange = {(e) => handleInputChange(e)} placeholder="Confirm Password"/>
//                 </div>
//             </div>
//             <div className="footer">
//                 <button onClick={()=>handleSubmit()} type="submit" className="btn">Register</button>
//             </div>
//         </form>
       
//         </div>
//     )       
// }

// export default RegistrationPage;


import React, { useState } from "react";
import ReactDOM from "react-dom";

import { useNavigate } from "react-router-dom";

import "./RegistrationPage.css";
import { Users } from "../User";

function Login() {
  let saveid = Users.length+1;
  console.log(saveid);
      localStorage.setItem("Idno", saveid.toString());
  // let checkId='0';
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();


  // User Login info
  const database = Users
  // [
  //   {
  //     username: "user1",
  //     password: "pass1"
  //   },
  //   {
  //     username: "user2",
  //     password: "pass2"
  //   }
  // ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
    pass1: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass, pass1, email, Phone } = document.forms[0];

    // Find user login info
    // const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    // if (userData) {

      if (pass1.value !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass1", message: errors.pass1 });
      } else {
        setIsSubmitted(true);
        // saveid= userData.id;

      navigate('/');
    //   Users[saveid].id = saveid;
   

    //   localStorage.setItem("currentUserId", saveid.toString());
    //   localStorage.setItem("checkId", '1');
      }
    }
    //  else {
    //   // Username not found
    //   setErrorMessages({ name: "uname", message: errors.uname });
    // }
//   };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>{
    // name === errorMessages.name && 
    return(
      <div className="error">{errorMessages.message}</div>

    
    );
}

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {/* {renderErrorMessage("uname")} */}

          <label>Email </label>
          <input type='email' name="email" required />
          {/* {renderErrorMessage("email")} */}
        
          <label>Phone</label>
          <input type='number' name="Phone" required />
          {/* {renderErrorMessage("Num")} */}
        
          <label>Password </label>
          <input type="password" name="pass" required />
          {/* {renderErrorMessage("pass")} */}

          
          <label>Confirm Password </label>
          <input type="password" name="pass1" required />
          {renderErrorMessage("pass1")}
          </div>
        <button className="login">
          Register
        </button>
      </form>

    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">  <a className="navbar-brand" href='/'>
          <h1 >
         Kinmel</h1>
         </a></div>
        {isSubmitted ? <div>
  
          {/* <Main></Main> */}
          </div> : renderForm}
      </div>
    </div>
  );
}

export default Login;
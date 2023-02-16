import React, { useState } from "react";
import ReactDOM from "react-dom";
import Main from "./component/main";
import { useNavigate } from "react-router-dom";

import "./Login.css";
import { Users } from "./User";

function Login() {
  let saveid;
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
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
        saveid= userData.id;

      navigate('/');
      localStorage.setItem("currentUserId", saveid.toString());
      localStorage.setItem("checkId", '1');
      }
    } else {
      // Username not found 
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
          </div>
        <button className="login">
          Log in
        </button>
      </form>
      <br/>
      <br />
      <p>Don't have an account?</p>
      <a href="/registration">
        <button className="reg" >
          Sign up
        </button>
      </a>
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
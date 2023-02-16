import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./LoginPage.css"

const LoginPage = () =>{
    return(
        <div className="cover">
            <Link to='/'>
                <h1>Kinmel</h1>
            </Link>

            <h3>Login</h3>
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />

            <button className="login-btn" >
             <Link to="/registration">
            <text>Login</text>
            </Link>
           </button>

<button className="register-btn">
            <Link to="/registration">
            <text>Register</text>
            </Link>
</button>
        </div>
    //     <div className="form">
    //   <form >
    //     <div className="input-container">
    //       <label>Username </label>
    //       <input type="text" name="uname" required />
    //       {/* {renderErrorMessage("uname")} */}
    //     </div>
    //     <div className="input-container">
    //       <label>Password </label>
    //       <input type="password" name="pass" required />
    //       {/* {renderErrorMessage("pass")} */}
    //     </div>
    //     <div className="button-container">
    //       <input type="submit" />
    //     </div>
    //   </form>
    // </div>
     )
}

export default LoginPage;
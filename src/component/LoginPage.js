import React from "react";
import "./LoginPage.css"

const LoginPage = () =>{
    return(
        <div className="cover">
            <h1>Login</h1>
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />

            <div className="login-btn"
            onClick={() => alert(
                'Its Clicked !')}>Login</div>

            <div className="Register"
            onClick={() => alert(
                'Register button Clicked !')}>Login</div>
        </div>
    )
}

export default LoginPage;
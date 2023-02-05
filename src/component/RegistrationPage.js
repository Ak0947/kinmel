import React from 'react';
import "./RegistrationPage.css"

const RegistrationPage= () =>{
    return(
        <div className='cover'>
            <h1>Registration</h1>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Middle Name" />
            <input type="text" placeholder="Last Name" />
            <input type="text" placeholder="address" />
            <input type="tel" placeholder="phone number" />
            <input type="email" placeholder="email" />
            <input type="text" placeholder="create username" />
            <input type="password" placeholder="create password" />
            <input type="date" placeholder="Date of Birth" />

            <div className="Register"
            onClick={() => alert(
                'Its Clicked !')}>Register</div>
        </div>
    )
}

export default RegistrationPage;
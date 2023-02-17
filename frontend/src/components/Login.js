import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import toplogo from './logo.png';

function Login ( { setCurrentUser, login } ) {
    const navigate = useNavigate();

    // initial login form data
    const initialLoginData = {
        email: "",
        password: ""
    };

    // state for login input
    const [loginData, setLoginData] = useState(initialLoginData);

    // handle login input change
    const handleLoginChange = (e) => {
        setLoginData({...loginData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        login(loginData)
    }

    const signUp = () => {
        navigate("/signup")
    }

    return (
        <div>
            <img className="logo" alt="Yes, Chef!" src={toplogo} />
            <h3>Welcome Back to Yes, Chef!</h3>
            <form onSubmit={handleSubmit}>
                <label>Email
                    <input
                    type="text"
                    name="email"
                    onChange={handleLoginChange}/>
                </label>
                <label>Password
                    <input
                    type="text"
                    name="password"
                    onChange={handleLoginChange}/>
                </label>
                <input
                type="submit"
                value="Login" />
            </form>
        <h3>Want an Apron? Signup Here!</h3>
        <button onClick={signUp}>Yes, Chef!</button>
        </div>
    )
}

export default Login;
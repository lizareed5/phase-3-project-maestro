import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import toplogo from "./logo.png"


function Signup() {
    const navigate = useNavigate();

    const initialSignupData = {
        user_name: "",
        first_name: "",
        first_name: "",
        email: "",
        password: "",
        image_URL: ""
    }
    const [signupData, setSignupData] = useState(initialSignupData);

    const handleSignupChange = (e) => {
        e.preventDefault();
    }

    const handleSignup = () => {
        console.log('signed up')
    }

    // function handleSubmit(e) {
    //     e.preventDefault();

    //     const newRecipe = {
    //         user_name: user_name,
    //         first_name: first_name,
    //         ingredients: ingredients,
    //         steps: steps,
    //         cuisine: cuisine,
    //         time: time,
    //         difficulty: difficulty,
    //         user_id: currentUser.id
    //     }

    //     //something wrong with this fetch request
    //     fetch("http://localhost:9292/recipes", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(newRecipe),
    //     })
    //     .then(resp => resp.json())
    //     .then(newRecipe => handleNewRecipe(newRecipe));
    //     navigate("/recipes")
    // }

    return (
        <>
            <img className="logo" alt="Yes, Chef!" src={toplogo} />
            <h1>Signup</h1>
            <form onSubmit={handleSignup}>
                <label>username
                    <input
                    type="text"
                    name="user_name"
                    onChange={handleSignupChange}/>
                </label>
                <label>First Name
                    <input
                    type="text"
                    name="first_name"
                    onChange={handleSignupChange}/>
                </label>
                <label>Last Name
                    <input
                    type="text"
                    name="last_name"
                    onChange={handleSignupChange}/>
                </label>
                <label>Email
                    <input
                    type="text"
                    name="email"
                    onChange={handleSignupChange}/>
                </label>
                <label>Password
                    <input
                    type="text"
                    name="password"
                    onChange={handleSignupChange}/>
                </label>
                <input
                type="submit"
                value="Signup" />
            </form>
        </>
    )
}

export default Signup;
import React from 'react';
import NavBar from './NavBar';
import RecipeCard from "./RecipeCard";
import { Card } from "semantic-ui-react";

function MyProfile ({currentUser}) {
    const myRecipes = currentUser.recipes.map((recipe) => {
        return <RecipeCard key={recipe.id} recipe={recipe} />
        // console.log(currentUser)
    })

    return (
        <>
            <NavBar/>
            <h1>{currentUser.first_name}'s Kitchen</h1>
            <Card.Group itemsPerRow={5}>{myRecipes}</Card.Group>
        </>
    )
}

export default MyProfile;
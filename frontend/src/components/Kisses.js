import React, { useEffect, useState } from 'react';
import RecipeCard from "./RecipeCard";
import { Card , Container } from "semantic-ui-react";
import Header from './Header';
import DisplayRecipes from './DisplayRecipes';

function Kisses ({currentUser}) {
    // state for recipes user has kisses
    const [kissedRecipes, setKissedRecipes] = useState([])

    // fetch for current user's kisses'
    useEffect(() => {
        fetch(`http://localhost:9292/users/${currentUser.id}/kisses`)
        .then((r) => r.json())
        .then((data) => setKissedRecipes(data));
    }, [])

    // console.log(kissedRecipes)

    // console.log(kissedRecipes[0].recipe.title)

    // const myKisses = kissedRecipes.map(kiss =>
    //     <RecipeCard key={kiss.id} recipe={kiss.recipe}/>
    //     )

    return (
        <>
        <DisplayRecipes listOfRecipes={kissedRecipes}/>
        {/* <Container>
            <Header/>
            <h1>{currentUser.first_name}'s Chef's Kisses</h1>
            {/* <Card.Group itemsPerRow={5}></Card.Group> */}
            {/* <DisplayRecipes listOfRecipes={kissedRecipes}/> */}
        {/* </Container> */}
        </>
    )
}

export default Kisses;
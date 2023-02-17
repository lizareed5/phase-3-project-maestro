import React from 'react'
import RecipeCard from './RecipeCard'

export default function DisplayRecipes({listOfRecipes}) {
    const displayRecipes = listOfRecipes.map(recipe => {
        return <RecipeCard
            recipe={recipe}
        />
    })

    return (
    <div>
        {displayRecipes}
    </div>
    )
}

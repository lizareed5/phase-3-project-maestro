import React, {useState} from 'react';
import NavBar from './NavBar';
import Header from './Header';

import { Button, Form, TextArea } from 'semantic-ui-react'


// import { useNavigate } from "react-router-dom";

// this will allow us to navigate back to the recipes page or directly to the newly added recipe
// const navigate = useNavigate();


// how to conntec who is logged in with the user id 

function NewRecipe ({handleNewRecipe}) {

    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [ingredients, setIngredients] = useState('')
    const [steps, setSteps] = useState('')
    const [cuisine, setCuisine] = useState('')
    const [time, setTime] = useState(0) 
    const [difficulty, setDifficulty] = useState('')
 
function handleSubmit(e) { 
    e.preventDefault(); 

    const newRecipe = {
        title: title,
        image_URL: image,
        ingredients: ingredients,
        steps: steps,
        cuisine: cuisine,
        time: time, 
        difficulty: difficulty, 
        user_id: 1
    }

    //something wrong with this fetch request 
    fetch("http://localhost:9292/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRecipe),
    })
    .then(resp => resp.json())
    .then(newRecipe => handleNewRecipe(newRecipe));
}
    return (

        <>
        <Header/>
        <h1>Add a new recipe</h1>
        <div class="ui centered grid">
        <div class="eight wide column">
            <div class="ui segment">
                <Form onSubmit= {handleSubmit}>
                    <Form.Field>
                    <label>Title</label>
                    <input placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
                    </Form.Field>
                    <Form.Field>
                    <label>Image Url</label>
                    <input placeholder='Image Url' value={image} onChange={(e) => setImage(e.target.value)} />
                    </Form.Field>
                    <Form.Field>
                    <label>Ingredients</label>
                    <input placeholder='Ingredients' value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
                    </Form.Field>
                    <Form.Field
                    id='form-textarea-control-opinion'
                    control={TextArea}
                    label='Directions'
                    placeholder='Directions' value={steps} onChange={(e) => setSteps(e.target.value)} />
                    <Form.Field>
                    <label>Cuisine</label>
                    <input placeholder='Cuisine' value={cuisine} onChange={(e) => setCuisine(e.target.value)} />
                    </Form.Field>
                    <Form.Field>
                    <label>Time</label>
                    <input placeholder='Time' value={time} onChange={(e) => setTime(e.target.value)} />
                    </Form.Field>
                    <Form.Field>
                    <label>Difficulty</label>
                    <input placeholder='Difficulty' value={difficulty} onChange={(e) => setDifficulty(e.target.value)} />
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
                </Form>
            </div>
        </div>
    </div> 
        </>

    )
   
}






export default NewRecipe; 
import React, {useState, useEffect} from 'react';
import { Card , Button , Icon , Label , Image , Container, Modal } from "semantic-ui-react";

function RecipeCard ({ recipe , currentUser, allcomment, setAllRecipes, handleDeleteRecipe, setCurrentRecipe, currentRecipe }) {

const [openSteps, setOpenSteps] = useState(false);
const [kissCount, setKissCount] = useState()
const [messCount, setMessCount] = useState()
// setCurrentRecipe(recipe);

const handleClick = () => {
    setOpenSteps(true);
}
// console.log(recipe.id)
// console.log(recipe.map(recipe => recipe.kisses))

useEffect(() => {
    fetch(`http://localhost:9292/recipes/${recipe.id}/kiss_count`)
    .then(res => res.json())
    .then(obj => console.log(obj))
}, [])

console.log(kissCount)

let kiss_count = recipe.kisses.map (kiss => kiss)
const kiss_count_total = kiss_count.length
let mess_count = recipe.messes.map (mess => mess)
const mess_count_total = mess_count.length
const comment_count = recipe.comments.map (comment => comment)
const comment_count_total = comment_count.length


const { title, steps, ingredients, cuisine, time, image_URL, difficulty, id  } = recipe;

function handleYesClick() {

    const newKiss = {
        user_id: currentUser.id,
        recipe_id: id
        }
    // if (recipe.kisses.includes(currentUser.id && id)) {
    //     alert("You have already liked this recipe")
    // }
    // else {
    fetch("http://localhost:9292/kisses", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        },
    body: JSON.stringify(newKiss),
        })
    .then(resp => resp.json())
    .then(data => {
        //kiss_count isn't accurately reflecting
        kiss_count = [...kiss_count, data]
        setKissCount(prev => prev+1)
    })
    console.log(kiss_count)
};

function handleMessClick() {

    const newMess = {
        user_id: currentUser.id,
        recipe_id: id
        }
    // if (recipe.kisses.includes(currentUser.id && id)) {
    //     alert("You have already liked this recipe")
    // }
    // else {
    fetch("http://localhost:9292/messes", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        },
    body: JSON.stringify(newMess),
        })
    .then(resp => resp.json())
    .then(data => {
        //mess_count isn't accurately reflecting
        mess_count = [...mess_count, data]
        setMessCount(prev => prev+1)
    })
    console.log(mess_count)
}

  // function for deleting recipes
    const deleteRecipe = () => {
        fetch(`http://localhost:9292/recipes/${id}`, {
            method: "DELETE",
        })
        .then(res => res.json())
        .then(handleDeleteRecipe)
        
    }

    const notYours = () => {
        alert(`This isn't your recipe, silly goose!`)
    }

return (
    <Card currentUser={currentUser}>
        <Image src= {image_URL} alt={title} wrapped ui={false} onClick = {handleClick}/>
        <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>
            <span>{cuisine}</span> <br></br>
            <span className='date'>{time} Minutes</span><br></br>
            <span>{difficulty}</span>
        </Card.Meta>
        </Card.Content>
        <Card.Content>
            <div>
                <Button  as='div' labelPosition='right'>
                    <Button icon onClick={handleYesClick}>
                        <Icon name='thumbs up' />
                        Yes
                    </Button>
                    <Label as='a' basic pointing='left'>
                        {kissCount}
                    </Label>
                </Button>
                <br></br>
                <br></br>
                <Button as='div' labelPosition='left'>
                    <Label as='a' basic pointing='right'>
                        {messCount}
                    </Label>
                    <Button icon onClick={handleMessClick}>
                        <Icon name='thumbs down' />
                        Mess
                    </Button>
                </Button>
            </div>
        </Card.Content>
        <Card.Content extra>
            <div class="content">
                <i class="comment icon"></i>
                {comment_count_total} comments
            </div>
        </Card.Content>
        <Card.Content>
            <Button
                onClick={deleteRecipe}
                // onClick={currentUser.id === recipe.user_id ? {deleteRecipe}:{notYours}}
                // {(currentUser.id === recipe.user_id) ? (onClick={deleteRecipe}) : (onClick={notYours})
                // }
            >
                to the compost
                <br />
                <br />
                🗑️
                </Button>
        </Card.Content>
        {/* <Card.Content>
            <div>
                {(currentUser.id === recipe.user_id) ? (<Button>
                to the compost
                <br />
                <br />
                🗑️
                </Button> ) : (
                    null
                ) }
            </div>
        </Card.Content> */}
        <Modal open = {openSteps} onClose = {() => setOpenSteps(false)} >
            <Modal.Header> {title}   </Modal.Header>
            <Modal.Content>
                <h3>Ingredients </h3>
                <h3><span>-  {ingredients} </span> <br></br></h3>
                <div class="ui divider"></div>
                <h4>Steps </h4>
                <h4><span>{steps}</span> <br></br></h4>
            </Modal.Content>

        </Modal>
    </Card>
)
}

export default RecipeCard;

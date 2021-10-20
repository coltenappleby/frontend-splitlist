import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemEdit from './ItemCard.js';

function ItemPreview({id, name, notes, location, completed}) {

    // I want a link on Name to open ItemShow
    // When I click Edit, itemPreview information disapears and a card opens in its space 
    // with more information and the ability to change its information


    // new set up
    // Item Card lives on List
    // Item Show presents data
    // When Edit is selected, Item Edit is shown
    // Need to figure out how to only let a user edit one card at a time.
    // If handle change and handle submit live on ItemEdit, will information change on the show?
    // I assume we would need a re-render in that case. Unsure how to push that data back up.
    // Maybe we have some state that lives in the ListShow that keeps track what item is being editted at a time
    // and another piece of state that can trigger a useeffect re-render to render a card 

    const [showEdit, setShowEdit] = useState(false)

    function handleChange(e) {
        setShowEdit(!showEdit)
    }

    // function handleSubmit(e){
    //     e.preventDefault()
    //     fetch(`http://localhost:3000/items/${id}`, {
    //         method: 'PATCH',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json'
    //         },
    //         body: JSON.stringify(formData)

    //     }
    // }}

    function handleSubmit(e){
        e.preventDefault() 
        fetch(`http://localhost:3000/posts/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(resp => resp.json())
        .then((updatedPost) => {
            if(updatedPost.id){
                // setErrors([])
                history.push(`/posts/${id}`)
            } else {
                setErrors(updatedPost)
            }  
        })  
    }

    return(
        <div>
            {showEdit === false ? 
                <div> 
                    Name: {name} <br/>
                    Notes: {notes} <br/>
                    Location: {location} <br/>
                    Completed: {completed === true ? "completed" : "incomplete"} <br/> <br/>
                    <Link to= {`/items/${id}`} > LINK</Link>
                    <button onClick={handleChange}>Edit</button>
                </div>
                :
                <div> 
                    {/* This is where the edit item will go */}
                    {<ItemEdit id={id} name={name} notes={notes} location={location} completed={completed} handleSubmit={handleSubmit}/>}
                    <button onClick={handleChange}>Close</button>
                </div>
            }

        </div>
    )

}

export default ItemPreview;



import React, { useState } from 'react';
import ItemEdit from './ItemEdit.js';
import ItemPreview from './ItemPreview.js'

function ItemCard({id, name, notes, location, completed}) {

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

    // Keep data in this component in state then push down and up

    const [showEdit, setShowEdit] = useState(false)
    const [itemInfo, setItemInfo] = useState({
        id: id,
        name: name,
        notes: notes,
        location: location,
        completed: completed
    })

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

    // function handleSubmit(e){
    //     e.preventDefault() 
    //     fetch(`http://localhost:3000/posts/${id}`, {
    //         method: 'PATCH',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json'
    //         },
    //         body: JSON.stringify(formData)
    //     })
    //     .then(resp => resp.json())
    //     .then((updatedPost) => {
    //         if(updatedPost.id){
    //             // setErrors([])
    //             history.push(`/posts/${id}`)
    //         } else {
    //             setErrors(updatedPost)
    //         }  
    //     })  
    // }

    return(
        <div>
            {showEdit === false ? 
                <div> 
                    {/* Show Information about the Item */}
                    {<ItemPreview {...itemInfo} />}
                    <button onClick={handleChange}>Edit</button>
                </div>
                :
                <div> 
                    {/* This is where the edit item will go */}
                    {<ItemEdit {...itemInfo} />} {/* handleSubmit={handleSubmit} */}
                    <button onClick={handleChange}>Close</button>
                </div>
            }

        </div>
    )

}

export default ItemCard;



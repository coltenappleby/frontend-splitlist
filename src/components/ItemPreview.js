import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ItemPreview({id, name, notes, location, completed}) {

    // I want a link on Name to open ItemShow
    // <ItemShow {id, name, notes, location, completed} key = {id}  />)

    const [showEdit, setShowEdit] = useState(false)
    const [formData, setFormData] = useState({
        name: name,
        notes: notes,
        location: location,
        completed: completed
    })

    function handleChange(e) {
        setShowEdit(!showEdit)
    }



    return(
        <div>
            {showEdit === false ? 
                <div> 
                    Name: {name} <br/>
                    Notes: {notes} <br/>
                    Location: {location} <br/>
                    Completed: {completed === true ? "completed" : "incomplete"} <br/> <br/>
                    <Link to= '/items/${id}' > LINK</Link>
                </div>
                :
                <div> 
                    {/* This is where the edit item will go */}

                </div>
            }

        </div>
    )

}

export default ItemPreview;



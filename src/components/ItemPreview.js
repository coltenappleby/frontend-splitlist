import React from 'react';

function ItemPreview({id, name, notes, location, completed}) {

    return(
        <div>
            Name: {name} <br/>
            Notes: {notes} <br/>
            Location: {location} <br/>
            Completed: {completed === true ? "completed" : "incomplete"} <br/> <br/>
        </div>

    )

}

export default ItemPreview;



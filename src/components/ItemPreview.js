import React from 'react';
import { Link } from 'react-router-dom';


function ItemPreview({id, name, notes, location, completed}) {

    return( 
        <div>
            Name: {name}
            <Link to= {`/items/${id}`} > LINK</Link> <br/>
            Notes: {notes} <br/>
            Location: {location} <br/>
            Completed: {completed === true ? "completed" : "incomplete"} <br/>
        </div>
    )


}

export default ItemPreview;
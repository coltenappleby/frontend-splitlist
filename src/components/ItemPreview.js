import React from 'react';
import { Link } from 'react-router-dom';


function ItemPreview({id, name, notes, location, completed}) {

    return( 
        <div>
            Name: {name} <br/>
            Notes: {notes} <br/>
            Location: {location} <br/>
            Completed: {completed === true ? "completed" : "incomplete"} <br/> <br/>
            <Link to= {`/items/${id}`} > LINK</Link>
        </div>
    )


}

export default ItemPreview;
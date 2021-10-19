import React from 'react';
import ItemShow from './ItemShow';
import { Link } from 'react-router-dom';

function ItemPreview({id, name, notes, location, completed}) {

    // I want a link on Name to open ItemShow
    // <ItemShow {id, name, notes, location, completed} key = {id}  />)
    return(
        <div>
            Name: {name} <br/>
            Notes: {notes} <br/>
            Location: {location} <br/>
            Completed: {completed === true ? "completed" : "incomplete"} <br/> <br/>
            <Link to= '/items/${id}' > LINK</Link>
        </div>

    )

}

export default ItemPreview;



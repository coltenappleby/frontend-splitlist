import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import ItemPreview from './ItemPreview';

function ItemShow() {

    // This may not be used, but getting my bairings in React and next to get a better idea on components

    const[itemInfo, setItemInfo] = useState('1')
    let { id } = useParams()
 
    useEffect(() => {
        fetch(`http://localhost:3000/items/${id}`)
        .then(resp => resp.json())
        .then((data) => {
            setItemInfo(data)
        })
    }, [id])


    return( 
        <div>
            Name: {itemInfo.name} <br/>
            Notes: {itemInfo.notes} <br/>
            Location: {itemInfo.location} <br/>
            Completed: {itemInfo.completed === true ? "completed" : "incomplete"} <br/> <br/>
        </div>
    )


}

export default ItemShow;
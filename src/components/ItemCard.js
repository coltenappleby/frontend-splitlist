import React, { useState } from 'react';

function ItemCard({id, name, notes, location, completed, handleSubmit}) {


    const [formData, setFormData] = useState({
        name: name,
        notes: notes,
        location: location,
        completed: completed
    })

    // function handleSubmit(e){}

    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    return(
        <div>
            <form className="item-edit-form" onSubmit={handleSubmit}>
                <label> Name: </label>
                <input type="text" name="name" value={formData.name} onChange={handleChange}/><br/>
                <label> Notes: </label>
                <input type="text" name="notes" value={formData.notes} onChange={handleChange}/><br/>
                <label> Location: </label>
                <input type="text" name="notes" value={formData.notes} onChange={handleChange}/><br/>
      
                <input type="submit" />
            </form>
        </div>
    )
}

export default ItemCard;
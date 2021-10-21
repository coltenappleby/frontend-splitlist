import React, { useState } from 'react';

function ItemEdit({id, name, notes, location, completed, setItemInfo, closeEdit}) {

    // this might not work if we want to re-render item on change
    const [formData, setFormData] = useState({
        name: name,
        notes: notes,
        location: location,
        completed: completed
    })

    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }
    
    function handleSubmit(e){
        e.preventDefault() 
        fetch(`http://localhost:3000/items/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData) 
        })
        .then(resp => resp.json())
        .then((data) => {
            setItemInfo(data)
            closeEdit()
        })  
    }

    return(
        <div>
            <form className="item-edit-form" onSubmit={handleSubmit}>
                <label> Name: </label>
                <input type="text" name="name" value={formData.name} onChange={handleChange}/><br/>
                <label> Notes: </label>
                <textarea 
                    name="notes" 
                    value={formData.notes} 
                    onChange={handleChange}
                    rows="8"
                    cols="60"
                /><br/>
                <label> Location: </label>
                <input type="text" name="location" value={formData.location} onChange={handleChange}/><br/>
      
                <input type="submit" />
            </form>
        </div>
    )
}

export default ItemEdit;
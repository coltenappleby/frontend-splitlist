import React, { useState } from 'react';


function ItemEdit({id, name, notes, location, completed}) {

    const [formData, setFormData] = useState({
        name: name,
        notes: notes,
        location: location,
        completed: completed
    })


    function handleSubmit(e){}

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
      
                <input type="submit" />
            </form>
        </div>

    )




}
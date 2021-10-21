import React, {useState} from 'react';



function ItemCreate({list_id, allItemsData, setAllItemsData}){

    const [formData, setFormData] = useState({
        name: '',
        notes: '',
        location: '',
        completed: false,
        user_id: 14, // hard coded for the time being
        list_id: list_id
    })

    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }
    
    function handleSubmit(e){
        e.preventDefault() 
        fetch(`http://localhost:3000/items`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData) 
        })
        .then(resp => resp.json())
        .then((newItem) => {
            const updatedItems = [...allItemsData, newItem]
            setAllItemsData(updatedItems)
        })  
    }

    return(
        <div>
            <form className="item-create-form" onSubmit={handleSubmit}>
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

export default ItemCreate;
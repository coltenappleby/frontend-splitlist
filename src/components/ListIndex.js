import List from 'List.js';
import ListPreview from 'ListPreview.js'
import React, {useState, useEffect} from 'react';



function ListIndex({}) {

    const[lists, setLists] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/lists')
        .then(resp => resp.json())
        .then(setLists)
      }, [])

    return(
        <div>
            {lists.length > 0 ? (
                lists.forEach(list => {
                    <ListPreview listInfo={list}></ListPreview>
                })
            ) : (<div></div>) }
        </div>
    )

}
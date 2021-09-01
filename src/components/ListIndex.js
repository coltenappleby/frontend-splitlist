import React, {useState, useEffect} from 'react';


// Would like to only retrive lists names, ids for the logged in user. no other info. will grab items associated
// when user selects a list


function ListIndex() {

    const[lists, setLists] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/lists')
        .then(resp => resp.json())
        .then(setLists)
      }, [])

    console.log(lists)

    const allLists = lists.map((list) => {
        // add links to show pages 
        return(<li key = {list.id}> {list.name} </li>)
    })

    return(
        <div>
            {lists.length > 0 ? (
                <ul> {allLists} </ul>
            ) : (<ul> No Lists available </ul>) }
        </div>
    )

}

export default ListIndex;
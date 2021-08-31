import React, {useState, useEffect} from 'react';



function ListIndex() {

    const[lists, setLists] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/lists')
        .then(resp => resp.json())
        .then(setLists)
      }, [])

    console.log(lists)

    const allLists = lists.map((list) => {
        <li key = {list.id}> {list.name} </li>
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
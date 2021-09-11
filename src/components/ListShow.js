import React, {useState, useEffect} from 'react';


// need to set up routes

function ListShow() {

    const[listInfo, setListInfo] = useState()

    useEffect(() => {
        fetch('http://localhost:3000/lists/[:id]')
        .then(resp => resp.json())
        .then(setListInfo)
      }, [])

    console.log(listInfo)

    return(
        <div>
            {listInfo.name}
        </div>
    )

}

export default ListShow;
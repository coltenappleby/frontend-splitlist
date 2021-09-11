import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'


// need to set up routes

function ListShow() {

    const[listInfo, setListInfo] = useState('')
    let { id } = useParams()

    // console.log(id) // id works
 
    useEffect(() => {
        fetch(`http://localhost:3000//lists/${id}`)
        .then(resp => resp.json())
        .then((listInfo) => {
            console.log(listInfo)
            setListInfo(setListInfo)
        })
      }, [])

    console.log(listInfo)

    return(
        <div>
            {listInfo !== '' ? '' : (
                `${listInfo.id}`
            )}
        </div>
    )

}

export default ListShow;
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'


// need to set up routes

function ListShow() {

    const[listInfo, setListInfo] = useState('1')
    let { id } = useParams()

    // console.log(id) // id works

    console.log(listInfo)
 
    useEffect(() => {
        fetch(`http://localhost:3000//lists/${id}`)
        .then(resp => resp.json())
        .then((listInfo) => {
            console.log(listInfo)
            setListInfo(listInfo)
        })
      }, [id])

    console.log(listInfo)

    return(
        <div>
            {listInfo === '1' ? '' : 
            <div> 
                <p> List Information: </p>
                <p> {listInfo.id} </p>
            </div>
            }
        </div>
    )

}

export default ListShow;
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'



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
            <div className = "List Information"> 
                List Name: {listInfo.name} <br/>
                Active: {listInfo.active === true ? "active" : "not active"}
            </div>
            }
        </div>
    )

}

export default ListShow;
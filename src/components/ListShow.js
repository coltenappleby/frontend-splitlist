import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import ItemCard from './ItemCard';



function ListShow() {

    const[listInfo, setListInfo] = useState('1')
    const[itemsData, setItemsData] = useState([])
    let { id } = useParams()
 
    useEffect(() => {
        fetch(`http://localhost:3000/lists/${id}`)
        .then(resp => resp.json())
        .then((data) => {
            setListInfo(data)
            setItemsData(data.items)        
        })
    }, [id])

    // List Show is receiving all information about the items. No need to re-query them.

    const items = itemsData.map((item) => <ItemCard {...item} key = {item.id}  />)

    return(
        <div>
            {listInfo === '1' ? '' : 
                <div className = "ListShow"> 
                    <div className = "List Information">  
                    {/* Header Information about the list */}
                        List Name: {listInfo.name} <br/>
                        Active: {listInfo.active === true ? "active" : "not active"}
                    </div> <br/>
                    <div className = "Items">
                        {items}
                    </div>
                </div>

                
            }
        </div>
    )

}

export default ListShow;
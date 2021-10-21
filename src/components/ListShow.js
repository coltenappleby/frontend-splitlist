import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import ItemCard from './ItemCard.js';
import ItemCreate from './ItemCreate.js';



function ListShow() {

    const[listInfo, setListInfo] = useState('1')
    const[itemsData, setItemsData] = useState([])
    const[createItemHidden, setCreateItemHidden] = useState(true)
    let { id } = useParams()
 
    useEffect(() => {
        fetch(`http://localhost:3000/lists/${id}`)
        .then(resp => resp.json())
        .then((data) => {
            setListInfo(data)
            setItemsData(data.items) 
        })
    }, [id])

    function handleItemCreateButton(e){
        setCreateItemHidden(!createItemHidden)
        console.log(itemsData)   
    }

    // List Show is receiving all information about the items. No need to re-query them.

    const items = itemsData.map((item) => <ItemCard {...item} key = {item.id}  />)

    return(
        <div>
            {listInfo === '1' ? '' : 
                <div className = "list-show"> 
                    <div className = "list-information">  
                        {/* Header Information about the list */}
                        List Name: {listInfo.name} <br/>
                        Active: {listInfo.active === true ? "active" : "not active"}
                    </div> <br/>
                    <div className = "Items">
                        {items}
                    </div>
                    {!createItemHidden && 
                        <div className = "item-create"> 
                            <ItemCreate list_id={id} allItemsData={itemsData} setAllItemsData={setItemsData} />
                        </div>
                    }
                    <button onClick={handleItemCreateButton}>{createItemHidden ? 'Create a new Item' : 'Close'}</button>
                </div>
                

                
            }
        </div>
    )

}

export default ListShow;
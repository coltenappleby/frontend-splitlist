import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import ItemPreview from './ItemPreview';



function ListShow() {

    const[listInfo, setListInfo] = useState('1')
    const[itemsData, setItemsData] = useState([])
    let { id } = useParams()
 
    useEffect(() => {
        fetch(`http://localhost:3000//lists/${id}`)
        .then(resp => resp.json())
        .then((data) => {
            setListInfo(data)
            setItemsData(data.items)
        })
    }, [id])

    const items = itemsData.map((item) => <ItemPreview {...item} key = {item.id}  />)

    return(
        <div>
            {listInfo === '1' ? '' : 
                <div className = "ListShow"> 
                    <div className = "List Information"> 
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
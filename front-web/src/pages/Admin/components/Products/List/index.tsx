import React from 'react'
import './styles.scss'
import {useHistory} from 'react-router-dom'

const List = () =>{

    const history = useHistory();
    const handleCreate=()=>{
        history.push("products/create")
    }
    return (
        <div className="admin-products-list-container">
            <button className="btn btn-primary btn-lg" onClick={handleCreate}>
                Add Product
            </button>
        </div>
    )
}

export default List;
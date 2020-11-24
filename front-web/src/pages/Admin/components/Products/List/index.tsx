import React from 'react'
import './styles.scss'
import {useHistory} from 'react-router-dom'
import Card from '../Card'

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
            <div className="admin-list-container">
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    )
}

export default List;
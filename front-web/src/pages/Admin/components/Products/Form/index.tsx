//import { isAllowedByRole } from 'core/utils/auth'
import { isAllowedByRole } from 'core/utils/auth'
import { makePrivateRequest } from 'core/utils/request'
import React, { useState } from 'react'
import BaseForm from '../../BaseForm'
import './styles.scss'

type FormState={
    name: string;
    price: string;
    category:string;
    description: string;
}

type FormEvent=HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
const Form =()=>{
    const [formData, setformData] = useState<FormState>({
        name:'',
        price:'',
        category:'',
        description: ''
        
    });
    const handleChange=(event: React.ChangeEvent<FormEvent>)=>{
        const name = event.target.name;
        const value = event.target.value;
        setformData(data => ({...data,[name]:value}))
    }

   const handleSubmit=(event: React.FormEvent<HTMLFormElement>)=>{
       event.preventDefault();
       const payload ={
           ...formData,
           imgUrl:"https://d3ift91kaax4b9.cloudfront.net/media/catalog/product/cache/eb51c2c13a771900639634451ef25d5a/1/_/1_314_77.jpg",
           categories:[{id:formData.category}]
       }
    makePrivateRequest({url:'/products', method:'POST', data:payload})
    .then(()=>{
        setformData({name:'', price:'', category:'', description:''})
    })
    console.log(payload)
    }
    return(
        <form action="" onSubmit={handleSubmit}>
            <BaseForm title="Register a Product">
            <div className="row">
                <div className="col-6">
                    <input 
                        value={formData.name}
                        type="text" 
                        name="name"
                        className="form-control mb-5"
                        onChange={handleChange}
                        placeholder="Product name"
                        />
                        <select 
                            name="category" 
                            className="form-control mb-5" 
                            onChange={handleChange}
                            value={formData.category}
                            >
                            <option value="1">Books</option>
                            <option value="3">Computers</option>
                            <option value="2">Electronics</option>
                        </select>
                        <input 
                        value={formData.price}
                        type="text" 
                        name="price"
                        className="form-control"
                        onChange={handleChange}
                        placeholder="Product price"
                        />
                </div>
                <div className="col-6">
                   {isAllowedByRole(['ROLE_ADMIN']) && (
                       <textarea 
                       name="description" 
                       className="form-control"
                       cols={30} 
                       rows={10}
                       onChange={handleChange}
                       value={formData.description}
                       />
                   )}
                        
                    
                </div>
            </div>
        </BaseForm>
        </form>
        
    )
}

export default Form;
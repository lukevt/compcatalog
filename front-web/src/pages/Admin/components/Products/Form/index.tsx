//import { isAllowedByRole } from 'core/utils/auth'
//import { isAllowedByRole } from 'core/utils/auth'
import { makePrivateRequest } from 'core/utils/request'
import React from 'react'
import { useForm} from 'react-hook-form'
import BaseForm from '../../BaseForm'
import './styles.scss'
import {toast } from 'react-toastify';
import { useHistory } from 'react-router-dom'


type FormState={
    name: string;
    price: string;
    description: string;
    imgUrl:string;
}


const Form =()=>{
    const { register, handleSubmit, errors} = useForm<FormState>();
    const history = useHistory();
   const onSubmit=(data:FormState)=>{
       console.log(data)
    makePrivateRequest({url:'/products1', method:'POST', data})
    .then(()=>{
        toast.success('Product sucessfully created!')
        history.push('/admin/products')
    })
    .catch(()=>{
        toast.error('Error creating the product!')
    })
    }
    return(
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <BaseForm title="Register a Product">
            <div className="row">
                <div className="col-6">
                    <div className="margin-bottom-30">
                        <input 
                            ref={register({
                                required: "Mandatory Field!",
                                minLength:{value:5,message:"Must be at least 5 carachters long!"},
                                maxLength:{value:60,message:"Must be less than 60 carachters long!"}
                            })}
                            name="name"
                            type="text" 
                            className="form-control input-base"
                            placeholder="Product name"
                            />
                            {errors.name && (
                            <div className="invalid-feedback d-block">
                                {errors.name.message}
                            </div>
                    )}

                    </div>
                    <div className="margin-bottom-30">
                    <input 
                        ref={register({required: "Mandatory Field!"})}
                        type="number" 
                        name="price"
                        className="form-control input-base"
                        placeholder="Product price"
                        />
                    {errors.price && (
                        <div className="invalid-feedback d-block">
                            {errors.price.message}
                        </div>
                    )}
                    </div>
                    <div className="margin-bottom-30">
                        <input 
                            ref={register({required: "Mandatory Field!"})}
                            type="text" 
                            name="imgUrl"
                            className="form-control input-base"
                            placeholder="Product image"
                         />
                        {errors.imgUrl && (
                            <div className="invalid-feedback d-block">
                                {errors.imgUrl.message}
                            </div>
                        )}

                    </div>
                        
                </div>
                <div className="col-6">
                   
                       <textarea 
                       ref={register({required: "Mandatory Field!"})}
                       name="description" 
                       className="form-control margin-bottom-30 input-base "
                       cols={30} 
                       rows={10}
                       placeholder="Description"
                       />
                       {errors.description && (
                        <div className="invalid-feedback d-block">
                            {errors.description.message}
                        </div>
                    )}
                       
               
                        
                    
                </div>
            </div>
        </BaseForm>
        </form>
        
    )
}

export default Form;
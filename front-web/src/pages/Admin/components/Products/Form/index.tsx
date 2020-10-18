import React from 'react'
import BaseForm from '../../BaseForm'
import './styles.scss'

const Form =()=>{
    return(
        <BaseForm title="Register a Product">
            <div className="row">
                <div className="col-6">
                    <input type="text" className="form-control"/>
                </div>
                <div className="col-6">

                </div>
            </div>
        </BaseForm>
    )
}

export default Form;
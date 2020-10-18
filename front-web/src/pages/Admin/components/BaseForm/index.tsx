import React, { Children } from 'react'
import { useHistory } from 'react-router-dom'
import './styles.scss'

type Props={
    title:string;
    children:React.ReactNode;
}
const BaseForme = ({title, children}:Props) =>{
    const history = useHistory();

    const handleCancel = () =>{
        history.push("../")
    }
    return (
        <div className="admin-base-form card-base border-radius-20">
            <h1 className="base-form-title">
                {title}
            </h1>
            {children}
            <div className="base-form-actions">
                <button className="btn btn-outline-danger btn-lg border-radious-10 mr-3 " onClick={handleCancel}>Cancel</button>
                <button className="btn btn-primary btn-lg border-radious-10 mr-3">Register</button>
            </div>
        </div>
    )
}

export default BaseForme;
 import React, { useState } from 'react'
 import './styles.scss'
 import AuthCard from '../Card'
 import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom'
import ButtonIcon from 'core/components/ButtonIcon'
import { makeLogin } from 'core/utils/request';
import { saveSessionData } from 'core/utils/auth';

type FormData={
    username:string;
    password:string
}
 const Login = () =>{
    const { register, handleSubmit} = useForm<FormData>();
    const [hasError, setHasError] = useState(false);
    const history = useHistory()

    const onSubmit=(data: FormData)=>{
        console.log(data)
        makeLogin(data)
        .then(response=>{
            setHasError(false)
            saveSessionData(response.data)
            history.push('/admin/products')
        })
        .catch(()=>{
            setHasError(true)
        })
    }
    return (
        <AuthCard title="login">
            {hasError && (
                <div className="alert alert-danger mt-5">
                    User or Password Invalid!
                </div>
            )}
           <form action="" className="login-form" onSubmit={handleSubmit(onSubmit)}>
               <input 
                type="email" 
                className="form-control input-base margin-bottom-30"
                placeholder="Email"
                name="username"
                ref={register({required:true})}
                />
               <input 
                type="password" 
                className="form-control input-base"
                placeholder="Password"
                name="password"
                ref={register ({required:true})}
                />
                <Link to="/ad,in/auth/recover" className="login-recover-link"> forgot password?</Link>
                
                <div className="login-submit">
                    <ButtonIcon text="login"/>
                </div>
                <div className="text-center">
                    <span className="not-registered">Not registered?</span>
                    <Link to="/admin/auth/register" className="login-register-link">Register</Link>
                </div>
           </form>
        </AuthCard>
    )
 }

 export default Login;
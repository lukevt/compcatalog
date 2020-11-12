 import React, { useState } from 'react'
 import './styles.scss'
 import AuthCard from '../Card'
 import {useForm } from 'react-hook-form';
import { Link, useHistory, useLocation } from 'react-router-dom'
import ButtonIcon from 'core/components/ButtonIcon'
import { makeLogin } from 'core/utils/request';
import { saveSessionData } from 'core/utils/auth';

type FormData={
    username:string;
    password:string
}

type LocationState={
    from:string;
}
 const Login = () =>{
    const { register, handleSubmit, errors} = useForm<FormData>();
    const [hasError, setHasError] = useState(false);
    const history = useHistory()
    let location = useLocation<LocationState>();

    const {from} = location.state || {from:{pathname:'/admin'}};

    const onSubmit=(data: FormData)=>{
        makeLogin(data)
        .then(response=>{
            setHasError(false)
            saveSessionData(response.data)
            history.replace(from)
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
               <div className="margin-bottom-30">
                    <input 
                        type="email" 
                        className={`form-control input-base ${errors.username ? 'is-invalid' : ''}`}
                        placeholder="Email"
                        name="username"
                        ref={register({
                            required: "This Field is required",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Invalid username"
                            }
                          })}
                    />
                    {errors.username && (
                        <div className="invalid-feedback d-block">
                            {errors.username.message}
                        </div>
                    )}
                </div>
                <div className="margin-bottom-30">
                    <input 
                        type="password" 
                        className={`form-control input-base ${errors.password ? 'is-invalid' : ''}`}
                        placeholder="Password"
                        name="password"
                        ref={register ({required:"This Field is required"})}
                    />
                    {errors.password && (
                        <div className="invalid-feedback d-block">
                            {errors.password.message}
                        </div>
                    )}

                </div>
               
                <Link to="/ad,in/auth/recover" className="login-recover-link"> forgot password?</Link>
                
                <div className="login-submit">
                    <ButtonIcon text="login"/>
                </div>
                <div className="text-center">
                    <span className="not-registered">Not registered?</span>
                    <Link to="/auth/register" className="login-register-link">Register</Link>
                </div>
           </form>
        </AuthCard>
    )
 }

 export default Login;
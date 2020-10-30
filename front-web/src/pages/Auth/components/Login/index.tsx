 import React from 'react'
 import './styles.scss'
 import AuthCard from '../Card'
 import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'
import ButtonIcon from 'core/components/ButtonIcon'

type FormData={
    email:string;
    password:string
}
 const Login = () =>{
    const { register, handleSubmit} = useForm<FormData>();

    const onSubmit=(data: FormData)=>{
        console.log(data)
    }
    return (
        <AuthCard title="login">
           <form action="" className="login-form" onSubmit={handleSubmit(onSubmit)}>
               <input 
                type="email" 
                className="form-control input-base margin-bottom-30"
                placeholder="Email"
                name="email"
                ref={register}
                />
               <input 
                type="password" 
                className="form-control input-base"
                placeholder="Password"
                name="password"
                ref={register}
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
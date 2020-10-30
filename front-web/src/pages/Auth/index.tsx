import React from 'react'
import './styles.scss'
import { ReactComponent as AuthImage } from 'core/assets/images/auth.svg'
import {Switch, Route} from 'react-router-dom'
import Login from './components/Login'

const Auth = () => (
    <div className="auth-container">
        <div className="auth-info">
            <h1 className="auth-info-title">
                Display your products <br /> on DS Catalog
            </h1>
            <p className="auth-info-subtitle">
                Be part of our catalog showing your products and <br /> increasing your sales
            </p>
            <AuthImage />
        </div>
        <div className="auth-content">
            <Switch>
                <Route path="/admin/auth/login">
                    <Login/>
                </Route>
                <Route path="/admin/auth/register">
                    <h1>Register</h1>
                </Route>
                <Route path="/admin/auth/recover">
                    <h1>Recover</h1>
                </Route>
            </Switch>
        </div>
    </div>
);

export default Auth;
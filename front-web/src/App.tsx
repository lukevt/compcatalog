import React from 'react'
import  './core/assets/styles/custom.scss'
import './App.scss'
import Routes from './Routes'
import { ToastContainer} from 'react-toastify';

const App  = () => {

    
    return (
        <>
            <Routes/>
            <ToastContainer />
        </>
    )
}

export default App;
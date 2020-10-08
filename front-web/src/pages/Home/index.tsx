import React from 'react'
import './styles.scss'
import {ReactComponent as MainImage} from '../../core/assets/images/main-image.svg'
import ButtonIcon from '../../core/components/ButtonIcon'
import {Link} from 'react-router-dom'
const Home =()=>(
    <div className="home-container">
        <div className="row home-content card-base border-radius-20">
            <div className="col-6">
                <h1 className="text-title">
                    Discover the best<br/> catalog of products
                    </h1>
                <p className="text-subtitle">Will help you find the best<br/>  products available in the market</p>
                <Link to="/catalog">
                    <ButtonIcon text="Start now your search"/>
                </Link>
                
            </div>
            <div className="col-6">
                <MainImage className="main-image"/>
            </div>
            
        </div>
    </div>
);

export default Home;
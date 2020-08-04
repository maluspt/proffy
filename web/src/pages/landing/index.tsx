import React from 'react';
import logoimg from '../../assets/images/logo.svg'
import landingimg from '../../assets/images/landing.svg'
import studyicon from '../../assets/images/icons/study.svg'
import teachicon from '../../assets/images/icons/give-classes.svg'
import purpleheart from '../../assets/images/icons/purple-heart.svg'
import './styles.css';
import { Link } from 'react-router-dom';

function Landing() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoimg} alt="proffy" />
                    <h2> Sua plataforma de estudos online.</h2>
                </div>
                <img src={landingimg} alt="plataforma de estudos" className="hero-image" />
                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyicon} alt="estudar" />
                        Estudar
                    </Link>
                    <Link to="/teach" className="give-classes">
                        <img src={teachicon} alt="ensinar" />
                        Ensinar
                    </Link>
                </div>
                <span className="total-connections">
                    total de 200 conexões já realizadas <img src={purpleheart} alt="purple heart" />
                </span>
            </div>
        </div>
    )
}

export default Landing;
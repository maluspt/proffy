import React from 'react';
import { Link } from 'react-router-dom';
import logoimg from '../../assets/images/logo.svg';
import backicon from '../../assets/images/icons/back.svg';
import './styles.css'

interface PageHeaderProps {
    title: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
        <header className="page-header" >
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backicon} alt="voltar" />
                </Link>
                <img src={logoimg} alt="proffy" />
            </div>
            <div className="header-content">
                <strong>{props.title}</strong>
                {props.children}
            </div>
        </header >
    );
}

export default PageHeader;
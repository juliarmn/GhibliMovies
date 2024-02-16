import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ghibli from './ghibli_logo.png';
import styles from './Cabecalho.module.css';
import CabecalhoLink from '../CabecalhoLink';

function Cabecalho() {
    const [loginClicked, setLoginClicked] = useState(false);

    const handleLoginClick = () => {
        setLoginClicked(true);
        setTimeout(() => setLoginClicked(false), 500);
    };

    return (
        <header className={styles.cabecalho}>s
            <Link to="./" className={styles.logo}>
                <img src={ghibli} alt="Logo Ghibli" className={styles.logoImage}></img>
            </Link>
            <nav>
            <CabecalhoLink url="./">
                HOME
            </CabecalhoLink>
            <CabecalhoLink url="./Filmes">
                FILMES
            </CabecalhoLink>
            <CabecalhoLink url="./Favoritos">
                FAVORITOS
            </CabecalhoLink>
            <button className={`${styles.loginButton} ${loginClicked ? styles.loginButtonClicked : ''}`} onClick={handleLoginClick}>
                LOGIN
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </button>
            </nav>
        </header>
    )
}

export default Cabecalho;

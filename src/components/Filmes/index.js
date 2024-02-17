import React from 'react';
import styles from './Filmes.module.css'

function Filmes() {
    return (
        <div className={styles.filmes}>
            <div className={styles.titulo}>
                <h1>FILMES</h1>
            </div>
            <div className={styles.barra}></div>
        </div>
    ) 
} 

export default Filmes;
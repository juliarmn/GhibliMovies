import React, { useEffect, useRef } from 'react';
import styles from "./Banner.module.css";
import lua from "./img/moon.png";
import arvore from './img/arvore.png';
import totoro from './img/totoro_chuva.png'
import black_pop from './img/Group 1.png'

function Banner() {
    const sceneRef = useRef(null);

    useEffect(() => {
        if (sceneRef.current) {
            stars(sceneRef.current);
        }
    }, []); 

    const stars = (scene) => {
        let count = 250;
        let i = 0;
        while (i < count) {
            let star = document.createElement("i");
            let x = Math.floor(Math.random() * window.innerWidth);
            let y = Math.floor(Math.random() * window.innerHeight);
            let duration = Math.random() * 10;
            let size = Math.random() * 2;
            star.style.left = x + 'px';
            star.style.top = y + 'px';
            star.style.width = 1 + size + 'px';
            star.style.height = 1 + size + 'px';
            star.style.animationDuration = 5 +duration + 's';
            star.style.animationDelay = duration + 's';
            scene.appendChild(star);
            i++;
        }
    };

    return (
        <div className={styles.scene} ref={sceneRef}> {}
            <img src={lua} alt="Lua" className={styles.moonImage} />
            <div className={styles.bola}></div>
            <img src={arvore} alt="arvore" className={styles.treeImage} />
            <img src={totoro} alt='totoro' className={styles.totoroImage}/>
            <img src={black_pop} alt='pop' className={styles.blackImage}/>

        </div>
    );
}

export default Banner;

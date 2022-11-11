import React from "react";
import styles from './Category.module.css'

export default function Category({ children, image, onClick }) {

    return (         
        <div className={styles.container} onClick={onClick}>
            <img className={styles.img} src={image} alt={children} />
            <h2 className={styles.h2}>{children}</h2>
            <p className={styles.p}>100 {children}</p>
        </div>
    )
  }
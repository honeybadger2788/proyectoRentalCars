import React from "react";
import styles from './Category.module.css'

export default function Category(props) {
        return (
        <div className={styles.container}>
            <img className={styles.img} src={props.image} alt='category' />
            <h2 className={styles.h2}>{props.children}</h2>
            <p className={styles.p}>Texto</p>
        </div>
    )
  }
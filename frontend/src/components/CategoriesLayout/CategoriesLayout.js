import React from "react";
import styles from './CategoriesLayout.module.css'
import Category from "./Category/Category";

export default function CategoriesLayout({ getCategory, categories }) {
  const onClick = (e) => {
    getCategory(e.target.alt)
}

    return (
      <section className={styles.section}>
        <h1 className={styles.h1}>Buscar por tipo de vehículo</h1>
        <div className={styles.container}>
            {
                categories.map((category) => (
                  <Category key={category.title}
                    image={category.image}
                    onClick={onClick}
                  >{category.title}</Category>
                ))
            }
        </div>
        </section>
    )
  }
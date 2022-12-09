import React from "react";
import styles from './CategoriesLayout.module.css'
import Category from "./Category/Category";

export default function CategoriesLayout({ getCategory, categories }) {

    return (
      <section className={styles.section}>
    <section className={styles.section}>
      <h1 className={styles.h1}>Buscar por tipo de vehículo</h1>
      <div className={styles.container}>
          {
              categories.map((category) => (
                <Category key={category.title}
                  image={category.image}
                  onClick={() => getCategory(category.title)}
                >{category.title}</Category>
              ))
          }
          </div>
        </section>
        </section>)

}

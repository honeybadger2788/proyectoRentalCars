import React from "react";
import styles from './CategoriesLayout.module.css'
import Category from "./Category/Category";

export default function CategoriesLayout() {

    const categories = [
        {
          title: 'Económico',
          image: './images/categoryImage.jpg'
        },
        {
          title: 'Deportivo',
          image: './images/categoryImage.jpg'
        },
        {
          title: 'De lujo',
          image: './images/categoryImage.jpg'
        },
        {
          title: '4x4',
          image: './images/categoryImage.jpg'
        }
      ]

    return (
        <section className={styles.section}>
        <h1 className={styles.h1}>Buscar por tipo de vehículo</h1>
        <div className={styles.container}>
            {
                categories.map((category) => (
                    <Category key={category.title} image={category.image}>{category.title}</Category>
                ))
            }
        </div>
        </section>
    )
  }
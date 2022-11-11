import React from "react";
import styles from './CategoriesLayout.module.css'
import Category from "./Category/Category";

export default function CategoriesLayout({ getCategory, categories }) {
  const onClick = (e) => {
    getCategory(e.target.alt)
}

import Card from './Card/Card';

import styles from './List.module.css';

function List({ data, children }) {

  console.log(data)
  return (
    <section className={styles.section}>
      <h1 className={styles.h1}>{children}</h1>
      <div className={styles.card_layout}>
      {data.map((item, key) => {
        return (
          <Card
            key={key}
            title={item.title}
            category={item.category.title}
            description={item.descriptionTitle}
            location={item.city.name}
            img={item.images[0]?.url}
          ></Card>
        );
      })}
      </div>
    </section>
  );
}

export default List;

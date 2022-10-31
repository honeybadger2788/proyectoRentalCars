import Card from './Card/Card';

import styles from './List.module.css';

function List({ data, children }) {
  return (
    <section className={styles.section}>
      <h1 className={styles.h1}>{children}</h1>
      <div className={styles.card_layout}>
      {data.map((item, key) => {
        return (
          <Card
            key={key}
            title={item.title}
            category={item.category}
            description={item.description}
            location={item.location}
            img={item.img}
          ></Card>
        );
      })}
      </div>
    </section>
  );
}

export default List;

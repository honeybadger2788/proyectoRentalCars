import Card from './Card/Card';

import styles from './List.module.css';

function List({ data }) {
  return (
    <section className={styles.container}>
      <h1>Recomendaciones</h1>
      <div className={styles.layout}>
        {data.map((item) => {
          return (
            <Card
              category={item.category.title}
              descriptionContent={item.descriptionContent}
              id={item.id}
              img={item.images[0]?.url}
              key={item.id}
              location={item.city.name}
              rating={item.rating}
              title={item.title}
            ></Card>
          );
        })}
      </div>
    </section>
  );
}

export default List;

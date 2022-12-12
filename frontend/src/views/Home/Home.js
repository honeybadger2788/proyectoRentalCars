import { useState } from 'react';

import List from '../../components/List/List';
import Search from '../../components/SearchLayout/Search/Search';
import CategoriesLayout from '../../components/CategoriesLayout/CategoriesLayout';

import useFetch from '../../useFetch';

import styles from './Home.module.css';
import Card from '../../components/List/Card/Card';

function Home() {
  const [cityFilter, setCityFilter] = useState();
  const [categoryFilter, setCategoryFilter] = useState();
  const [dateFilter, setDateFilter] = useState([]);

  const getCity = (data) => {
    setCityFilter(`city=${data}`);
    console.log(data);
  };

  const getDates = (data) => {
    setDateFilter(`startDate=${data[0]}&endDate=${data[1]}`);
    console.log(data);
  };

  const getCategory = (data) => {
    setCategoryFilter(`category=${data}`);
    console.log(data);
  };

  const { data: cars, errorCar } = useFetch(
    `http://grupo2backend-env.eba-ssmahfch.us-east-2.elasticbeanstalk.com/car${
      cityFilter || categoryFilter || dateFilter
        ? `?${categoryFilter}&${cityFilter}&${dateFilter}`
        : ''
    }`
  );

  const { data: categories, errorCategory } = useFetch(
    'http://grupo2backend-env.eba-ssmahfch.us-east-2.elasticbeanstalk.com/categories'
  );

  if (errorCar) console.log('errorCar: ', errorCar);
  else if (errorCategory) console.log('errorCategory: ', errorCategory);

  return (
    <div className={styles.container}>
      <Search getCity={getCity} getDates={getDates} />
      <section className={styles.bodyContainer}>
        {categories && (
          <CategoriesLayout getCategory={getCategory} categories={categories} />
        )}
        {cars && cars.length > 0 && <List data={cars} />}
      </section>
    </div>
  );
}

export default Home;

import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { addDays, format } from 'date-fns';
import styles from './Search.module.css';
import useFetch from '../../../useFetch';
import SearchCalendar from '../SearchCalendar/SearchCalendar';

export default function Search({ getCity, getDates }) {
  const { register, handleSubmit } = useForm();

  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection',
    },
  ]);

  const { data: cities, error } = useFetch(
    'http://grupo2backend-env.eba-ssmahfch.us-east-2.elasticbeanstalk.com/cities'
  );
  if (error) console.log(error);

  const onSubmit = (data) => {
    getCity(data.city);
    const startDate = format(range[0].startDate, 'yyyy-MM-dd');
    const endDate = format(range[0].endDate, 'yyyy-MM-dd');

    console.log(startDate);
    console.log(endDate);

    const dates = [startDate, endDate];

    console.log(dates);

    getDates(dates);
  };

  return (
    <div className={styles.search}>
      <h1 className={styles.title}>
        Busca ofertas en hoteles, casas y mucho más
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formContainer}>
          <div className={styles.container}>
            <select
              className={styles.select}
              name="city"
              {...register('city', { required: { value: true } })}
            >
              <option value="default">¿A dónde vamos?</option>
              {cities &&
                cities.map((city, i) => {
                  return (
                    <option key={i} value={city.id}>
                      {city.name}
                    </option>
                  );
                })}
            </select>
          </div>

          <div className={styles.container}>
            <SearchCalendar range={range} setRange={setRange} />
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.button} type="submit">
              Buscar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

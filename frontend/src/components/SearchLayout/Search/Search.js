import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './Search.module.css';
import DateRangeComp from '../DateRangePicker/DateRangePicker';
import useFetch from '../../../useFetch';

export default function Search({ getCity }) {
  const {register,handleSubmit} = useForm();

  
  const { data: cities,
    error } =
    useFetch('http://grupo2backend-env.eba-ssmahfch.us-east-2.elasticbeanstalk.com/cities')
  if (error)
    console.log(error)


  const onSubmit = (data) => {
    getCity(data.city)
  }

  
  return (
    <div className={styles.search}>
    <h1 className={styles.title}>
    Busca ofertas en hoteles, casas y mucho más
    </h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.formContainer}>
      <div className={styles.container}>
        <select className={styles.select} name="city" {...register("city", { required: {value:true}})}>
          <option value="default">
          ¿A dónde vamos?
          </option>
          {
            cities && cities.map((city, i) => {
            return <option key={i} value={city.id}>{city.name}</option>
            })
          }
        </select>
      </div>
      <div className={styles.container}>
        <DateRangeComp />
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
  
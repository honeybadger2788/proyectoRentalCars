import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './Search.module.css';
import DateRangeComp from '../DateRangePicker/DateRangePicker';

export default function Search({ getCars }) {
  const {register,handleSubmit} = useForm();
  const [cities, setCities] = useState([])

  
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("http://grupo2backend-env.eba-ssmahfch.us-east-2.elasticbeanstalk.com/cities", requestOptions)
      .then(response => response.json())
      .then(result => setCities(result))
      .catch(error => console.log('error', error));
  }, [])


  const onSubmit = (data, e) => {
    console.log(data)
    
    fetch(`http://grupo2backend-env.eba-ssmahfch.us-east-2.elasticbeanstalk.com/car?city=${data.city}`)
      .then(response => response.json())
      .then(result => {
        getCars(result)
      })
      .catch(error => console.log('error', error));
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
            cities.map((city, i) => {
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
  
import { useParams, Link } from 'react-router-dom';

import useFetch from '../../useFetch';

import Calendar from '../../components/Calendar/Calendar';
import Characteristics from '../../components/Characteristics/Characteristics';
import Description from '../../components/Description/Description';
import Header from '../../components/Header/Header';
import Images from '../../components/Images/Images';
import Location from '../../components/Location/Location';
import Policies from '../../components/Policies/Policies';

import styles from './CarDetailPage.module.css';

import carMock from '../../mock/car-mock-updated.json';

function CarDetailPage() {
  const { id } = useParams();
  const {
    data: car,
    loading,
    error,
  } = useFetch(
    `http://grupo2backend-env.eba-ssmahfch.us-east-2.elasticbeanstalk.com/car/${id}`
  );
  if (error) {
    console.log(error);
  }

  console.log(car);

  return (
    <>
      {loading && <p>Loading...</p>}
      {car && (
        <section className={styles.container}>
          <div>
            <Header category={car.category} title={car.title} />
            <Location city={car.city} rating={car.rating} />
            <section className={styles.social}>
              <i className="fa-solid fa-share-nodes fa-xl"></i>
              <i className="fa-regular fa-heart fa-xl"></i>
            </section>
          </div>
          <Images images={car.images} />
          <Description
            descriptionTitle={car.descriptionTitle}
            descriptionContent={car.descriptionContent}
          />
          <Characteristics characteristic={car.characteristic} />
          <Policies policies={carMock.policies} />

          <div className={styles.calendarContainer}>
            <div>
              <h3>Fechas disponibles</h3>
              <Calendar />
            </div>
            <div className={styles.reserve}>
              <p>Agregá tus fechas de viaje para obtener precios exactos</p>
              <Link to={`reservation`}>
                <button>Iniciar reserva</button>
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default CarDetailPage;

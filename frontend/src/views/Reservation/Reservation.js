import { useParams } from 'react-router-dom';

import useFetch from '../../useFetch';

import Header from '../../components/Header/Header';
import Policies from '../../components/Policies/Policies';

import ReservationDetail from './components/ReservationDetail/ReservationDetail';

import carMock from '../../mock/car-mock-updated.json';
import styles from './Reservation.module.css';

function Reservation() {
  //   const car = carMock;
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

  return (
    <>
      {loading && <p>Loading...</p>}
      {car && (
        <section className={styles.container}>
          <Header category={car.category} title={car.title} />
          <div className={styles.form}>
            <ReservationDetail car={car} />
          </div>
          <Policies policies={carMock.policies} />
        </section>
      )}
    </>
  );
}

export default Reservation;

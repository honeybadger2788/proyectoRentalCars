import { useParams } from 'react-router-dom';

import Calendar from './components/Calendar/Calendar';
import Characteristics from './components/Characteristics/Characteristics';
import Description from './components/Description/Description';
import Header from './components/Header/Header';
import Location from './components/Location/Location';
import Policies from './components/Policies/Policies';

import styles from './CarDetailPage.module.css';

import carMock from '../../mock/car-mock.json';

function CarDetailPage() {
  const { id } = useParams();

  const car = carMock;

  return (
    <section className={styles.container}>
      <div>
        <Header category={car.category} title={car.title} />
        <Location
          car={car}
          location={car.location}
          distance={car.distance}
          rating={car.rating}
        />
      </div>
      <section className={styles.social}>
        <i className="fa-solid fa-share-nodes fa-xl"></i>
        <i className="fa-regular fa-heart fa-xl"></i>
      </section>
      <Description description={car.description} />
      <Characteristics characteristics={car.characteristics} />
      <Policies policies={car.policies} />
      <Calendar />

      {/* <p>Car id: {id}</p> */}
    </section>
  );
}

export default CarDetailPage;

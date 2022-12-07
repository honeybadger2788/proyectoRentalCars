import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { addDays, format } from 'date-fns';

import { useAuthContext } from '../../hooks/useAuthContext';
import useFetch from '../../useFetch';

import Header from '../../components/Header/Header';
import Policies from '../../components/Policies/Policies';
import Calendar from '../../components/Calendar/Calendar';
import ReservationDetail from './components/ReservationDetail/ReservationDetail';
import PersonalData from './components/PersonalData/PersonalData';

import styles from './Reservation.module.css';

import carMock from '../../mock/car-mock-updated.json';

function Reservation() {
  // const car = carMock;
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useAuthContext();
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
  // state related with date for calendar
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection',
    },
  ]);

  // state related with booking submit
  const [bookingError, setBookingError] = useState(null);
  const [isBookingLoading, setIsBookingLoading] = useState(null);

  // functions related to date transform for calendar
  const disabledDates = car
    ? transformApiToDisabledDates(car.bookings)
    : undefined;

  function returnDatesBetweenStartAndEndDate(startDate, endDate) {
    let dateArray = [];
    let currentDate = addDays(startDate, 1);
    let stopDate = addDays(endDate, 1);

    while (currentDate <= stopDate) {
      dateArray.push(currentDate);
      currentDate = addDays(currentDate, 1);
    }
    return dateArray;
  }

  function transformApiToDisabledDates(bookings) {
    let disabledDates = [];
    const transformedBookings = bookings.map((booking) => {
      return {
        startDate: new Date(booking.startDate),
        endDate: new Date(booking.endDate),
      };
    });
    transformedBookings.forEach((booking) => {
      const dateArray = returnDatesBetweenStartAndEndDate(
        booking.startDate,
        booking.endDate
      );
      disabledDates = [...disabledDates, ...dateArray];
    });
    return disabledDates;
  }

  // functions related with form submit
  function prepareFormData() {
    const startDate = format(range[0].startDate, 'yyyy-MM-dd');
    const endDate = format(range[0].endDate, 'yyyy-MM-dd');
    const time = '01:00:00';
    const car = { id: parseInt(id) };

    const data = {
      startDate,
      endDate,
      time,
      car,
      user: { id: user.id },
    };

    return data;
  }

  const addBooking = async (data) => {
    setIsBookingLoading(true);
    setBookingError(null);

    const user = sessionStorage.getItem('user');
    const jwt = JSON.parse(user).jwt;

    console.log('jwt before appending to myHeader', jwt);

    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${jwt}`);
    myHeaders.append('Content-Type', 'application/json');

    console.log('data', data);

    try {
      const response = await fetch(
        'http://grupo2backend-env.eba-ssmahfch.us-east-2.elasticbeanstalk.com/booking/add',
        {
          method: 'POST',
          headers: myHeaders,
          body: JSON.stringify(data),
          redirect: 'follow',
        }
      );

      console.log('response', response);

      if (!response.ok) {
        setIsBookingLoading(false);
        setBookingError(
          'Lamentablemente la reserva no ha podido realizarse. Por favor, intente más tarde'
        );
      }

      if (response.ok) {
        setIsBookingLoading(false);
        navigate('/product/reservation-success');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const data = prepareFormData();
    addBooking(data);
  };

  return (
    <>
      {loading && <p>Loading...</p>}
      {car && (
        <section className={styles.container}>
          <Header subtitle={car?.category?.title} title={car?.title} />
          <div className={styles.body}>
            {bookingError && <p>{bookingError}</p>}
            <form className={styles.form} onSubmit={onSubmit}>
              <div className={styles.personalData}>
                <PersonalData user={user} />
              </div>
              <div className={styles.calendar}>
                <h3>Seleccioná tu fecha de reserva</h3>
                <div>
                  <Calendar
                    disabledDates={disabledDates}
                    range={range}
                    setRange={setRange}
                  />
                </div>
              </div>

              <div className={styles.details}>
                <ReservationDetail car={car} range={range} />
              </div>
            </form>
            <Policies policies={carMock.policies} />
          </div>
        </section>
      )}
    </>
  );
}

export default Reservation;

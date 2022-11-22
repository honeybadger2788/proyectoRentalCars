import { useEffect, useState } from 'react';

import { addDays } from 'date-fns';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import styles from './Calendar.module.css';

function Calendar() {
  // date state
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection',
    },
  ]);

  // screen size
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const setWindowDimensions = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', setWindowDimensions);

    return () => {
      window.removeEventListener('resize', setWindowDimensions);
    };
  }, []);

  return (
    <section className={styles.background}>
      <h3>Fechas disponibles</h3>
      <div className={styles.container}>
        <DateRange
          className={styles.calendar}
          direction={windowWidth < 750 ? 'vertical' : 'horizontal'}
          editableDateInputs={true}
          months={windowWidth < 750 ? 1 : 2}
          moveRangeOnFirstSelection={false}
          ranges={range}
          onChange={(item) => setRange([item.selection])}
          showDateDisplay={false}
          showMonthAndYearPickers={false}
        />
        <div className={styles.reserve}>
          <p>Agregá tus fechas de viaje para obtener precios exactos</p>
          <button>Iniciar reserva</button>
        </div>
      </div>
    </section>
  );
}

export default Calendar;

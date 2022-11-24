import { useEffect, useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import styles from './Calendar.module.css';

function Calendar({ range, setRange, disabledDates }) {
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
    <div className={styles.container}>
      <DateRange
        className={styles.calendar}
        direction={windowWidth < 750 ? 'vertical' : 'horizontal'}
        disabledDates={disabledDates}
        editableDateInputs={true}
        minDate={new Date()}
        months={windowWidth < 750 ? 1 : 2}
        moveRangeOnFirstSelection={false}
        ranges={range}
        onChange={(item) => setRange([item.selection])}
        showDateDisplay={false}
        showMonthAndYearPickers={false}
      />
    </div>
  );
}

export default Calendar;

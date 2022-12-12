import { useEffect, useRef, useState } from 'react';
import { addDays, format } from 'date-fns';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import styles from './SearchCalendar.module.css';

function SearchCalendar({ range, setRange }) {
  // screen size
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // open close
  const [open, setOpen] = useState(false);

  // get the target element to toggle
  const refOne = useRef(null);

  useEffect(() => {
    window.addEventListener('resize', setWindowDimensions);

    return () => {
      window.removeEventListener('resize', setWindowDimensions);
    };
  }, []);

  useEffect(() => {
    // event listeners
    document.addEventListener('keydown', hideOnEscape, true);
    document.addEventListener('click', hideOnClickOutside, true);
  }, []);

  const setWindowDimensions = () => {
    setWindowWidth(window.innerWidth);
  };

  // hide dropdown on ESC press
  const hideOnEscape = (e) => {
    // console.log(e.key)
    if (e.key === 'Escape') {
      setOpen(false);
    }
  };

  // Hide on outside click
  const hideOnClickOutside = (e) => {
    // console.log(refOne.current)
    // console.log(e.target)
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };

  return (
    <div>
      <div ref={refOne} className={styles.container}>
        <input
          value={`${format(range[0].startDate, 'dd/MM/yyyy')} to ${format(
            range[0].endDate,
            'dd/MM/yyyy'
          )}`}
          readOnly
          className={styles.input}
          onClick={() => setOpen((open) => !open)}
        />
        {open && (
          <div className={styles.calendarContainer}>
            <DateRange
              className={styles.calendar}
              direction={windowWidth < 750 ? 'vertical' : 'horizontal'}
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
        )}
      </div>
    </div>
  );
}

export default SearchCalendar;

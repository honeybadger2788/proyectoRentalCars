import { useEffect, useRef, useState } from 'react';
import { addDays, format } from 'date-fns';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import styles from './SearchCalendar.module.css';

function SearchCalendar({ range, setRange }) {
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

    //Screen Size
    const [mobileScreen, setMobileScreen] = useState(false);

    useEffect(() => {
      if (window.innerWidth > 750) {
        setMobileScreen(false);
      } else if (window.innerWidth < 750) {
        setMobileScreen(true);
      }
    }, []);
  
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth > 750) {
          setMobileScreen(false);
        } else if (window.innerWidth < 750) {
          setMobileScreen(true);
        }
      };
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    // open close
    const [open, setOpen] = useState(false);
  
    // get the target element to toggle
    const refOne = useRef(null);
  
    useEffect(() => {
      // event listeners
      document.addEventListener('keydown', hideOnEscape, true);
      document.addEventListener('click', hideOnClickOutside, true);
    }, []);
  
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
    <div className={styles.calendarWrap}>

      <div ref={refOne} className={styles.calendarContainer}>
        <input
            value={`${format(range[0].startDate, 'dd/MM/yyyy')} to ${format(
            range[0].endDate,
            'dd/MM/yyyy'
            )}`}
            readOnly
            className={styles.input}
            onClick={() => setOpen((open) => !open)}
        />
        {open &&  (
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
        )}

      </div>
    </div>
  );
}

export default SearchCalendar;
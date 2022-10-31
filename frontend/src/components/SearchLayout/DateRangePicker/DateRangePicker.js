import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { DateRange } from 'react-date-range';
import styles from './DateRangePicker.module.css';
import { addDays } from 'date-fns';
import format from 'date-fns/format';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

export default function DateRangeComp() {
  // date state
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection',
    },
  ]);

  //Screen Size
  const [mobileScreen, setMobileScreen] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 425) {
      setMobileScreen(false);
    } else if (window.innerWidth < 425) {
      setMobileScreen(true);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 425) {
        setMobileScreen(false);
      } else if (window.innerWidth < 425) {
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
      <input
        value={`${format(range[0].startDate, 'MM/dd/yyyy')} to ${format(
          range[0].endDate,
          'MM/dd/yyyy'
        )}`}
        readOnly
        className={styles.input}
        onClick={() => setOpen((open) => !open)}
      />

      <div ref={refOne} className={styles.calendarContainer}>
        {open && mobileScreen && (
          <DateRange
            onChange={(item) => setRange([item.selection])}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={1}
            direction="vertical"
            className={styles.calendarElement}
            showDateDisplay={false}
            showMonthAndYearPickers={false}
          />
        )}

        {open && !mobileScreen && (
          <DateRange
            onChange={(item) => setRange([item.selection])}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={2}
            direction="horizontal"
            className={styles.calendarElement}
            showDateDisplay={false}
            showMonthAndYearPickers={false}
          />
        )}
      </div>
    </div>
  );
}

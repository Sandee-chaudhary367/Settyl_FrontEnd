import { useState } from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';

import  ReactTooltip  from 'react-tooltip'

function shiftDate(date, numDays) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + numDays);
    return newDate;
  }
  
  function getRange(count) {
    const arr = [];
    for (let idx = 0; idx < count; idx += 1) {
      arr.push(idx);
    }
    return arr;
  }
  
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function generateRandomValues(count, date = new Date()) {
    return getRange(count).map((index) => {
      return {
        date: shiftDate(date, -index),
        count: getRandomInt(1, 3),
      };
    });
  }

export const HeatMap=()=>{

    let [values,setValues]=useState(generateRandomValues(200));

    let getTooltipDataAttrs = (value) => {
        if (!value || !value.date) {
          return null;
        }
        return {
          'data-tooltip': `${value.date.toISOString().slice(0, 10)} has count: ${value.count}`,
        };
      };

    let handleClick = (value) => {
         alert(`You clicked on ${value.date.toISOString().slice(0, 10)} with count: ${value.count}`);
    };

    return (
        <div>
        <CalendarHeatmap
        values={values}
    
        classForValue={(value) => {
            if (!value) {
              return 'color-empty';
            }
            return `color-github-${value.count}`;
        }}
        tooltipDataAttrs={getTooltipDataAttrs}
        onClick={handleClick}
        showWeekdayLabels
        showMonthLabels
        />
        <ReactTooltip />

       
        </div>
    )
}
import React from 'react';

import { DayIndexItem } from './day_index_item';

export const DayIndex = ({ numDays, days, exercises, type }) => {
  let dayList = [];
  let dayExercises;
  for (let i = 1; i <= numDays; i++) {
    if (!days[i]) { return null }
    dayExercises = days[i].exercise_ids.map(id => exercises[id]);
    dayList.push(<DayIndexItem day={ i } key={ i } days={ days } exercises={ dayExercises } type={ type }/> );
  }

  return (
    <ul className="day-index">
      { dayList }
    </ul>
  );
};

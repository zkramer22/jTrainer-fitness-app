import React from 'react';

import ExerciseIndex from '../exercises/exercise_index';

export const DayIndexItem = ({ day, days, exercises, type }) => {
  return (
    <li className="day-index-item">
      <div className="day-header">
        <span>Day { day }</span>
      </div>
      <ExerciseIndex exercises={ exercises } type={ type } />
    </li>
  )
};

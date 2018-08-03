import React from 'react';

import DayIndexItem from './day_index_item';

export const DayIndex = ({ numDays, days, exercises, type }) => {

  let dayList = [];
  let dayExercises;
  for (let i = 1; i <= numDays; i++) {
    if (!days[i]) { return null }
    dayExercises = days[i].exercise_ids.map(id => exercises[id]);
    dayList.push(<DayIndexItem day={ i } key={ i } days={ days }
                  exercises={ dayExercises } type={ type }/>
    );
  }

  return (
    <ul className="day-index">
      { dayList }
    </ul>
  );
};


// <div id="column-header"> // TODO: make sure this shows up on phone. Change hacky styling.
//   <div className="exercise-name"></div>
//   <div className="exercise-small-column">sets</div>
//   <div className="exercise-small-column">reps</div>
//   <div className="rest">rest</div>
//   <div className="tempo">tempo</div>
//   <div className="rpe">RPE</div>
// </div>

import React from 'react';

import DayIndexItem from './day_index_item';

class DayIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { days, dayIds, dayExercises, activeDay } = this.props;
    if (!days) { return null }

    return (
      <ul className="day-index">
        { dayIds.map((dayId, i) => {
          return (
            <DayIndexItem key={ i } num={ i + 1 }
              dayExercises={ dayExercises[i + 1] } activeDay={ activeDay } />
          );
        })
        }
        <div className="exercise-index-item" id="add-exercise-container">
          <span className="exercise-name" id="add-exercise">
            Add Exercise
            <i className="material-icons">add</i>
          </span>
        </div>
      </ul>
    );
  }
}

export default DayIndex;

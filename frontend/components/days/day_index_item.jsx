import React from 'react';

import ExerciseIndex from '../exercises/exercise_index';

class DayIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    
  }

  render() {
    const { dayExercises, num, activeDay } = this.props;

    if (num === activeDay) {
      return (
        <li className="day-index-item">
          <ExerciseIndex exercises={ dayExercises } />
        </li>
      );
    }
    else {
      return (
        <li className="day-index-item flip-hidden">
          <ExerciseIndex exercises={ dayExercises } />
        </li>
      );
      return null;
    }
  }
}

export default DayIndexItem;

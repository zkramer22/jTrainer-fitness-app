import React from 'react';
import { connect } from 'react-redux';
import DayIndex from '../days/day_index';

class WeekIndexItem extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
    const { week, days, dayIds, dayExercises,
            num, activeWeek, activeDay } = this.props;
    if (!week) { return null }

    if (num === activeWeek) {
      return (
        <div className="week-index-item">
          <DayIndex days={ days } dayIds={ dayIds }
            activeDay={ activeDay }
            dayExercises={ dayExercises } />
        </div>
      );
    }
    else {
      return null;
      return (
        <div className="week-index-item horiz-hidden">
          <DayIndex days={ days } dayIds={ dayIds }
            activeDay={ activeDay }
            dayExercises={ dayExercises } />
        </div>
      );
    }
  }
}

export default WeekIndexItem;

import React from 'react';
import { connect } from 'react-redux';

import WeekIndexItem from './week_index_item';

class WeekIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { weeks, days, dayExercises, activeWeek, activeDay } = this.props;
    if (!weeks) { return null }

    return (
      <ul className="week-index">
        { Object.values(weeks).map((week, i) => {
          return (
            <WeekIndexItem key={ i } num={ i + 1 } week={ week } days={ days }
              dayIds={ week.day_ids } dayExercises={ dayExercises }
              activeWeek={ activeWeek } activeDay={ activeDay } />
          );
        })
        }
      </ul>
    );
  }
}

export default WeekIndex;

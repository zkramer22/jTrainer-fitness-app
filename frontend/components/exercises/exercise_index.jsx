import React from 'react';
import { connect } from 'react-redux';

import ExerciseIndexItem from './exercise_index_item';

class ExerciseIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { exercises, type } = this.props;
    if (!exercises || !type) { return null }


    return (
      <ul className="exercise-index">
        {/*
        <div className="column-header">
          <div className="column-spacer"></div>
          <div className="exercise-small-column">sets</div>
          <div className="exercise-small-column">reps</div>
          <div className="rest">rest</div>
          <div className="tempo">tempo</div>
          <div className="rpe">RPE</div>
          <div className="notes"></div>
        </div>
        */}
        { exercises.map((exercise, i) => {
          return (
            <ExerciseIndexItem key={ i } exercise={ exercise } type={ type }/>
          );
        })
        }
      </ul>
    );
  }
}

export default ExerciseIndex;

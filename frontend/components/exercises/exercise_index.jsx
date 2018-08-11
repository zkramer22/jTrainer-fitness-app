import React from 'react';
import ExerciseIndexItem from './exercise_index_item';

class ExerciseIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { exercises } = this.props;
    if (!exercises) { return null }

    return (
      <ul className="exercise-index">
        <div className="column-header">
          <div className="column-spacer">exercise</div>
          <div className="exercise-small-column">sets</div>
          <div className="exercise-small-column">reps</div>
          <div className="rest">rest</div>
          <div className="tempo">tempo</div>
          <div className="rpe">RPE</div>
          <div className="notes">notes</div>
        </div>

        { Object.values(exercises).map((exercise, i) => {
            return (
              <ExerciseIndexItem key={ i } exercise={ exercise } />
            );
          })
        }
      </ul>
    );
  }
}

export default ExerciseIndex;

import React from 'react';
import { connect } from 'react-redux';

class ExerciseIndexItem extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
    const { type, exercise } = this.props;
    if (!exercise || !type) { return null }

    const tempos = exercise.tempos;
    const tempo = tempos ? (
      <div className="tempo">{ tempos[0] }:{ tempos[1] }:{ tempos[2] }:{ tempos[3] }</div>
    ) : (
      <div className="tempo">{ exercise.tempo_other }</div>
    );
    const sets = exercise.sets;
    const set = sets ? (
      <div className="set">{ sets }</div>
    ) : (
      <div>{ exercise.sets_other }</div>
    );
    const reps = exercise.reps;
    const rep = reps ? (
      <div className="rep">{ reps }</div>
    ) : (
      <div className="set">{ exercise.reps_other }</div>
    );

    return (
      <div className="exercise-index-item">
        <div className="exercise-name">
          { exercise.name }
        </div>
        <div className="exercise-small-column">
          { set }
        </div>
        <div className="exercise-small-column">
          { rep }
        </div>
        <div className="rest">
          { exercise.rest }
        </div>
        { tempo }
        <div className="rpe">
          { exercise.rpe }
        </div>

      </div>
    )
  }
}

const msp = state => {
  return {

  };
};

const mdp = (dispatch, ownProps) => {
  return {

  };
};

export default connect(msp, mdp)(ExerciseIndexItem);

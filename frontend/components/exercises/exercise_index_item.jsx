import React from 'react';
import { connect } from 'react-redux';

class ExerciseIndexItem extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
    const { exercise } = this.props;

    if (!exercise) { return null }

    const tempos = exercise.tempos;
    const tempo = tempos ? (
      <div className="tempo">{ tempos[0] }:{ tempos[1] }:{ tempos[2] }:{ tempos[3] }</div>
    ) : (
      <div className="tempo">{ exercise.tempo_other }</div>
    );
    const sets = exercise.sets;
    const set = sets ? (
      <div className="exercise-small-column">{ sets }</div>
    ) : (
      <div className="exercise-small-column">{ exercise.sets_other }</div>
    );
    const reps = exercise.reps;
    const rep = reps ? (
      <div className="exercise-small-column">{ reps }</div>
    ) : (
      <div className="exercise-small-column">{ exercise.reps_other }</div>
    );

    return (
      <div className="exercise-index-item">
        <span className="exercise-name">{ exercise.name }</span>
        { set }
        { rep }
        <div className="rest">{ exercise.rest }</div>
        { tempo }
        <div className="rpe">{ exercise.rpe }</div>
        <div className="notes">{ exercise.notes }</div>
        {/*
        */}
      </div>
    )
  }
}

export default ExerciseIndexItem;

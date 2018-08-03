import React from 'react';
import { connect } from 'react-redux';

import ExerciseIndexItem from './exercise_index_item';

class ExerciseIndex extends React.Component {
  render() {
    const { exercises, type } = this.props;
    if (!exercises || !type) { return null }

    return (
      <ul className="exercise-index" >
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

// const msp = state => {
//   return {
//
//   };
// };
//
// const mdp = dispatch => {
//   return {
//
//   };
// };
//
// export default connect(msp, mdp)(ExerciseIndex);

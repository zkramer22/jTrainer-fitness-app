import React from 'react';
import { connect } from 'react-redux';
import { requestAllExercises } from '../../actions/exercise_actions';
import { selectAllExercises, propSort } from '../../reducers/selectors';
import ExerciseIndexItem from './exercise_index_item';

class ExerciseCatalog extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sortProp: 'name', sortOrder: 'ASC' };
    this.sortExercises = this.sortExercises.bind(this);
  }

  componentDidMount() {
    this.props.requestAllExercises();
  }

  sortExercises(property) {
    if (property === this.state.sortProp) {
      if (this.state.sortOrder === 'ASC') {
        this.setState({ sortProp: property, sortOrder: 'DESC' });
      }
      else {
        this.setState({ sortProp: property, sortOrder: 'ASC' });
      }
    }
    else {
      this.setState({ sortProp: property, sortOrder: 'ASC' });
    }
  }

  render() {
    const exercises = this.props.exercises;
    if (!exercises) { return null }

    exercises.sort(propSort(this.state.sortProp, this.state.sortOrder));

    return (
      <section id="exercise-catalog-container">
        <ul className="exercise-index">
          <div className="column-header" id="exercise-catalog-header">
            <div className="column-spacer"
              onClick={ () => this.sortExercises('name')}>exercise</div>
            <div className="exercise-small-column"
              onClick={ () => this.sortExercises('sets')}>sets</div>
            <div className="exercise-small-column"
              onClick={ () => this.sortExercises('reps')}>reps</div>
            <div className="rest"
              onClick={ () => this.sortExercises('rest')}>rest</div>
            <div className="tempo">tempo</div>
            <div className="rpe"
              onClick={ () => this.sortExercises('rpe')}>RPE</div>
            <div className="notes"
              onClick={ () => this.sortExercises('notes')}>notes</div>
          </div>

          { exercises.map((exercise, i) => <ExerciseIndexItem
            key={ i } exercise={ exercise } /> ) }
          </ul>
      </section>
    );
  }
}

const msp = state => {
  return {
    exercises: selectAllExercises(state)
  };
};

const mdp = dispatch => {
  return {
    requestAllExercises: () => dispatch(requestAllExercises())
  };
};

export default connect(msp, mdp)(ExerciseCatalog);

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { requestSingleProgram, deleteProgram } from '../../actions/program_actions';
import { selectProgramExercises } from '../../reducers/selectors';
import { DayIndex } from '../days/day_index';

// TODO: // make Day, Week components to render here, based on the programs weeks / days_per_week values

class ProgramDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestSingleProgram(this.props.match.params.programId);
  }

  render() {
    const { program, exercises, days, exerciseIndexType } = this.props;

    let weeks = ( <ul id="weeks-list"></ul> );
    for (let i = 1, numWeeks = program.weeks, $list = $('#weeks-list'); i <= numWeeks; i++) {
      $list.append(`<li class="week-list-item">${i}</li>`);
    }

    return (
      <section id="program-detail-container">
        { /*
          • top bar that displays program.weeks number of Weeks.
          swipe over or tap to different Weeks.

          • Weeks will contain program.days_per_week number of Day components.
          Day components will carry an 'exercises' prop through to send to
          an ExerciseIndex, which will contain ExerciseIndexItems...

        */ }

        <nav id="weeks-nav">
          <span>WEEKS</span>
          { weeks }
        </nav>

        <DayIndex numDays={ program.days_per_week } days={ days }
          exercises={ exercises } type={ exerciseIndexType } />

      </section>
    );
  }
}

const msp = (state, ownProps) => {
  const program = state.entities.programs[ownProps.match.params.programId] || {};
  const days = state.entities.days || {};
  const exercises = state.entities.exercises || {};

  return {
    days: days,
    exerciseIndexType: "program",
    program: program,
    exercises: selectProgramExercises(state, program)
  };
};

const mdp = dispatch => {
  return {
    requestSingleProgram: id => dispatch(requestSingleProgram(id)),
    // deleteProgram: programId => dispatch(deleteProgram(programId)),
    // openModal: modal => dispatch(openModal(modal))
  };
};

export default connect(msp, mdp)(ProgramDetail);

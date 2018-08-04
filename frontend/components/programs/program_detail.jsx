import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { requestSingleProgram, deleteProgram } from '../../actions/program_actions';
import { selectProgramExercises } from '../../reducers/selectors';
import { DayIndex } from '../days/day_index';

class ProgramDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollPos: 0
    };
    this.getWeeks = this.getWeeks.bind(this);
  }

  componentDidMount() {
    this.props.requestSingleProgram(this.props.match.params.programId);
  }

  componentDidUpdate() {
    this.dayHeaders();
  }

  dayHeaders() {
    if (this.state.days) {
      for (let i = 0, length = this.state.days.length; i < length; i++) {
        $(this.state.days[i]).sticky({ topSpacing: 157 });
      }
      return;
    }
    const $days = $('.day-header');
    this.setState({ days: $days });
  }

  getWeeks() {
    let weekArr = [];
    for (let i = 1, numWeeks = this.props.program.weeks; i <= numWeeks; i++) {
      weekArr.push(<li key={ i } className="week-list-item">{ i }</li>);
    }
    return weekArr;
  }

  render() {
    const { program, exercises, days, exerciseIndexType } = this.props;

    return (
      <section id="program-detail-container">
        <nav id="weeks-nav">
          <span>WEEKS</span>
          <ul id="weeks-list">
            { this.getWeeks() }
          </ul>
        </nav>

        <div id="column-header">
          <div className="column-spacer"></div>
          <div className="exercise-small-column">sets</div>
          <div className="exercise-small-column">reps</div>
          <div className="rest">rest</div>
          <div className="tempo">tempo</div>
          <div className="rpe">RPE</div>
        </div>

        <DayIndex numDays={ program.days_per_week } days={ days }
          exercises={ exercises } type={ exerciseIndexType } />

        <div className="tall-test-div"></div>
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

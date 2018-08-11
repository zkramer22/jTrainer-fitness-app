import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { requestSingleProgram, deleteProgram } from '../../actions/program_actions';
import { selectDayExercises, selectWeeks, selectDays } from '../../reducers/selectors';
import WeekIndex from '../weeks/week_index';

class ProgramDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { week: 1, day: 1 };
    this.changeWeek = this.changeWeek.bind(this);
    this.changeDay = this.changeDay.bind(this);
  }

  componentDidMount() {
    this.props.requestSingleProgram(this.props.match.params.programId);
  }

  changeWeek(target) {
    this.setState({ week: parseInt(target.value) });
  }

  changeDay(target) {
    this.setState({ day: parseInt(target.value) });
  }

  // dayHeaders() {
  //   if (this.state.days) {
  //     for (let i = 0, length = this.state.days.length; i < length; i++) {
  //       $(this.state.days[i]).sticky({ topSpacing: 157 });
  //     }
  //     return;
  //   }
  //   const $days = $('.day-header');
  //   this.setState({ days: $days });
  // }

  // getWeeks() {
  //   let weekArr = [];
  //   for (let i = 1, numWeeks = this.props.program.num_weeks; i <= numWeeks; i++) {
  //     weekArr.push(<li key={ i } className="week-list-item">{ i }</li>);
  //   }
  //   return weekArr;
  // }

  render() {
    const { program, exercises, weeks, days, dayExercises } = this.props;
    const maxWeeks = Object.values(weeks).length;
    const maxDays = Object.values(days).length;

    return (
      <section id="program-detail-container">
        <nav id="weeks-nav">
          <div id="week-day-container">
            <div className="number-container"id="week-container">
              <span>WEEK</span>
              <input id="week-input" className="number-slider" type="number"
                min="1" step="1" max={ maxWeeks } value={ this.state.week }
                onChange={ e => {
                  this.changeWeek(e.target);
                }} />
            </div>
            <div className="number-container" id="day-container">
              <span>DAY</span>
              <input id="day-input" className="number-slider" type="number"
                min="1" step="1" max={ maxDays } value={ this.state.day }
                onChange={ e => {
                  this.changeDay(e.target);
                }} />
            </div>
          </div>
        </nav>

        <WeekIndex weeks={ weeks } days={ days } dayExercises={ dayExercises }
          activeWeek={ this.state.week } activeDay={ this.state.day } />
      </section>
    );
  }
}

const msp = (state, ownProps) => {
  const program = state.entities.programs[ownProps.match.params.programId] || {};
  const weeks = state.entities.weeks;
  const days = state.entities.days;
  const dayExercises = state.entities.dayExercises;

  const programWeeks = selectWeeks(state, program, weeks);
  const programDays = selectDays(state, program, days);
  const programDayExercises = selectDayExercises(state, program);

  return {
    program: program,
    weeks: programWeeks,
    days: programDays,
    dayExercises: programDayExercises,
    // exerciseIndexType: "program",
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

{/*
  <DayIndex numDays={ program.num_days } days={ days }
  exercises={ exercises } type={ exerciseIndexType } />
*/}

import React from 'react';

import ExerciseIndex from '../exercises/exercise_index';

class DayIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { day, days, exercises, type } = this.props;

    return (
      <li className="day-index-item">
        <div className="day-header">
          <span className="exercise-name">Day { day }</span>
          <div className="exercise-small-column">sets</div>
          <div className="exercise-small-column">reps</div>
          <div className="rest">rest</div>
          <div className="tempo">tempo</div>
          <div className="rpe">RPE</div>
        </div>
        <ExerciseIndex exercises={ exercises } type={ type } />
      </li>
    );
  }
}
//
// export const DayIndexItem = ({ day, days, exercises, type }) => {
//   return (
//     <li className="day-index-item">
//       <div className="day-header">
//         <span>Day { day }</span>
//       </div>
//       <ExerciseIndex exercises={ exercises } type={ type } />
//     </li>
//   )
// };

export default DayIndexItem;

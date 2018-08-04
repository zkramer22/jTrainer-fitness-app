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
          <span>Day { day }</span>
        </div>
        <ExerciseIndex exercises={ exercises } type={ type } />
      </li>
    );
  }
}

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

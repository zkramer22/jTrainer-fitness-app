import React from 'react';

import ExerciseIndex from '../exercises/exercise_index';

class DayIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidUpdate() {
    if (this.state.headers) {
      for (let i = 0, length = this.state.headers.length; i < length; i++) {
        $(this.state.headers[i]).sticky({ topSpacing: 157 });
      }
      return;
    }
    const $headers = $('.column-header');
    this.setState({ headers: $headers})
  }

  render() {
    const { day, days, exercises, type } = this.props;

    return (
      <li className="day-index-item">
        <div className="day-header">
          <span className="day-title">Day { day }</span>
        </div>
        <ExerciseIndex exercises={ exercises } type={ type } />
      </li>
    );
  }
}

export default DayIndexItem;

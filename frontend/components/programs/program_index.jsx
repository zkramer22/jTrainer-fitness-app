import React from 'react';
import { connect } from 'react-redux';
import { requestAllPrograms } from '../../actions/program_actions';
import { selectAllPrograms, propSort } from '../../reducers/selectors';
import ProgramIndexItem from './program_index_item';

class ProgramIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sortProp: 'name', sortOrder: 'ASC' };
    this.sortPrograms = this.sortPrograms.bind(this);
  }

  componentDidMount() {
    this.props.requestAllPrograms();
  }

  sortPrograms(property) {
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
    const programs = this.props.programs;

    programs.sort(propSort(this.state.sortProp, this.state.sortOrder));

    return (
      <section id="program-index-container">
        <div className="index-header">
          <span className="index-name">PROGRAMS</span>
          <p>sort by:</p>
          <p className="sorters" onClick={ () => this.sortPrograms("name") }>name</p>
          <p className="sorters" onClick={ () => this.sortPrograms("num_weeks") }>weeks</p>
          <p className="sorters" onClick={ () => this.sortPrograms("num_days") }>days</p>
        </div>
        <ul id="program-index">
          { programs.map((program, i) => <ProgramIndexItem
            key={ i } program={ program } /> ) }
        </ul>
      </section>
    );
  }
}

const msp = state => {
  return {
    programs: selectAllPrograms(state)
  };
};

const mdp = dispatch => {
  return {
    requestAllPrograms: () => dispatch(requestAllPrograms())
  };
};

export default connect(msp, mdp)(ProgramIndex);

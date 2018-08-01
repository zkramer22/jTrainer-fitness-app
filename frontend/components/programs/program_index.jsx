import React from 'react';
import { connect } from 'react-redux';
import { requestAllPrograms } from '../../actions/program_actions';
import { selectAllPrograms } from '../../reducers/selectors';
import ProgramIndexItem from './program_index_item';

class ProgramIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllPrograms();
  }

  render() {
    const { programs } = this.props;

    return (
      <section id="program-index-container">
        <ul id="program-index">
          { programs.map(program => <ProgramIndexItem
            key={ program.id } program={ program } /> ) }
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

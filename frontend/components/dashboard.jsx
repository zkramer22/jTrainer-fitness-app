import React from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <div id="dashboard-container">
        <section id="links-container">
          <Link to="/programs" className="dashboard-link">PROGRAMS</Link>
          <Link to="/exercises" className="dashboard-link">EXERCISES</Link>
          <Link to="/athletes" className="dashboard-link">ATHLETES</Link>
        </section>
      </div>
    );
  }
}

export default Dashboard;

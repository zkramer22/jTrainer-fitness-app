import React from 'react';
import { Link } from 'react-router-dom';

const ProgramIndexItem = ({ program }) => {
  return (
    <div className="program-index-item-container">
      <Link className="program-index-item" to={`/programs/${program.id}`}>
        <div className="program-name">{ program.name }</div>
        <div className="program-weeks">{ program.weeks } wks</div>
         <div className="program-days-per-week">{ program.days_per_week } days / wk</div>
        {/*
        <div className="program-comments">{ program.comments }</div>
        */}
      </Link>
    </div>
  );
};

export default ProgramIndexItem;

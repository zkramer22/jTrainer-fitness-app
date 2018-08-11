import React from 'react';
import { Link } from 'react-router-dom';

const ProgramIndexItem = ({ program }) => {
  return (
    <li className="program-index-item-container">
      <Link className="program-index-item" to={`/programs/${program.id}`}>
        <div className="program-name-and-update">
          <div className="program-name">{ program.name }</div>
          <div className="program-last-updated">Modified { program.updatedAt }</div>
        </div>
        <div className="program-weeks-and-days">
          <div className="program-weeks">{ program.num_weeks } weeks</div>
          <div className="program-days-per-week">{ program.num_days } days / week</div>
        </div>
        {/*
        <div className="program-comments">{ program.comments }</div>
        */}
      </Link>
    </li>
  );
};

export default ProgramIndexItem;

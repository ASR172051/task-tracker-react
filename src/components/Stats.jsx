import React from 'react';

function Stats({ total, completed }) {
  return (
    <div className="stats">
      <p>Total Tasks: {total}</p>
      <p>Completed: {completed}</p>
      <p>Completion Rate: {total ? Math.round((completed / total) * 100) : 0}%</p>
    </div>
  );
}

export default Stats;

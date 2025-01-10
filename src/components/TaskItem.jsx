import React from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function TaskItem({ task, onToggle, onDelete }) {
  const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    return `${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`;
  };

  return (
    <div className="habit-item">
      <input
        type="checkbox"
        checked={task.completed}
        className="task-checkbox"
        onChange={() => onToggle(task.id)}
      />
      <div className="task-details">
        <div className="task-text-wrapper">
          <span className={task.completed ? 'completed' : ''}>
            {task.text}
          </span>
        </div>
        {task.completed && (
          <small className="completion-date">
            Completed: {formatDateTime(task.completedAt)}
          </small>
        )}
      </div>
      <DeleteForeverIcon 
        onClick={() => onDelete(task.id)}
        className="delete-button"
        sx={{ 
          color: '#ff4444',
          cursor: 'pointer',
          '&:hover': {
            color: '#ff0000',
            transform: 'scale(1.1)'
          },
          transition: 'all 0.2s ease'
        }}
      />
    </div>
  );
}

export default TaskItem;

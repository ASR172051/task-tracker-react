import React, { useContext } from 'react';
import { HabitContext } from '../context/HabitContext';

function TaskForm({ inputValue, setInputValue, handleSubmit, category, setCategory }) {
  const { categories } = useContext(HabitContext);

  return (
    <form onSubmit={handleSubmit} className="habit-form">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new Task..."
        className="habit-input"
      />
      <select 
        value={category} 
        onChange={(e) => setCategory(e.target.value)}
        className="category-select"
      >
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
      <button type="submit" className="add-button">Add Task</button>
    </form>
  );
}

export default TaskForm;

import React, { useState, useEffect, useCallback } from 'react';
import Stats from './components/Stats';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { HabitProvider } from './context/HabitContext';
import EnhancedStats from './components/EnhancedStats';

function HabitTracker() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [stats, setStats] = useState({ total: 0, completed: 0 });
  const [showForm, setShowForm] = useState(false);
  const [idleTimer, setIdleTimer] = useState(null);
  const [category, setCategory] = useState('Personal');

  // Load tasks from localStorage
  useEffect(() => {
    const savedTasks = localStorage.getItem('habits');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Save tasks to localStorage
  useEffect(() => {
    localStorage.setItem('habits', JSON.stringify(tasks));
  }, [tasks]);

  // Reset idle timer when form is interacted with
  const resetIdleTimer = useCallback(() => {
    if (idleTimer) clearTimeout(idleTimer);
    const timer = setTimeout(() => {
      setShowForm(false);
    }, 5000); // 5 seconds of inactivity
    setIdleTimer(timer);
  }, [idleTimer]);

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (idleTimer) clearTimeout(idleTimer);
    };
  }, [idleTimer]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      const newTask = {
        id: Date.now(),
        text: inputValue,
        category: category,
        completed: false,
        createdAt: new Date().toISOString(),
        completedAt: null,
        streak: 0
      };
      setTasks([...tasks, newTask]);
      setInputValue('');
      updateStats([...tasks, newTask]);
      resetIdleTimer(); // Reset timer on submit
    }
  };

  const toggleTask = (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? {
        ...task,
        completed: !task.completed,
        completedAt: !task.completed ? new Date().toISOString() : null
      } : task
    );
    setTasks(updatedTasks);
    updateStats(updatedTasks);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const updateStats = (currentTasks) => {
    setStats({
      total: currentTasks.length,
      completed: currentTasks.filter(task => task.completed).length
    });
  };

  const handleFormInteraction = () => {
    resetIdleTimer();
  };

  return (
    <HabitProvider>
      <div className="habit-tracker">
        <h1>Daily Task Tracker</h1>
        
        <Stats 
          total={stats.total} 
          completed={stats.completed} 
        />

        <div className="main-content">
          <div className="sidebar">
            <div className="add-habit-container">
              <button 
                className="toggle-form-button"
                onClick={() => {
                  setShowForm(!showForm);
                  if (!showForm) resetIdleTimer();
                }}
              >
                {showForm ? '− Close' : '+ Add Task'}
              </button>
              
              {showForm && (
                <div onMouseMove={handleFormInteraction} onClick={handleFormInteraction}>
                  <TaskForm 
                    inputValue={inputValue}
                    setInputValue={(value) => {
                      setInputValue(value);
                      resetIdleTimer();
                    }}
                    handleSubmit={handleSubmit}
                    category={category}
                    setCategory={setCategory}
                  />
                </div>
              )}
            </div>
          </div>

          <div className="content-area">
            <TaskList 
              tasks={tasks}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          </div>
        </div>

        <EnhancedStats tasks={tasks} />
      </div>
    </HabitProvider>
  );
}

export default HabitTracker;
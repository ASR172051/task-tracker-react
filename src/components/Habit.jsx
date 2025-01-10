// ...existing imports...

function HabitTracker() {
  // ...existing state...

  const resetIdleTimer = useCallback(() => {
    if (idleTimer) clearTimeout(idleTimer);
    const timer = setTimeout(() => {
      // Only hide if input is empty
      if (!inputValue.trim()) {
        setShowForm(false);
      }
    }, 15000); // Increased to 15 seconds
    setIdleTimer(timer);
  }, [idleTimer, inputValue]); // Added inputValue to dependencies

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      const newTask = {
        // ...existing task properties...
      };
      setTasks([...tasks, newTask]);
      setInputValue('');
      updateStats([...tasks, newTask]);
      
      // Set timeout to hide form after submission
      setTimeout(() => {
        setShowForm(false);
      }, 1000);
    }
  };

  // ...rest of existing code...
}

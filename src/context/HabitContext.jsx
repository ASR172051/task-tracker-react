import React, { createContext, useState } from 'react';

export const HabitContext = createContext();

export const HabitProvider = ({ children }) => {
  const [categories] = useState([
    'Personal', 'Work', 'Health', 'Learning', 'Fitness'
  ]);

  return (
    <HabitContext.Provider value={{ categories }}>
      {children}
    </HabitContext.Provider>
  );
};

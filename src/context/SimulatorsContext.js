import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

export const SimulatorsContext = createContext();

export const SimulatorsProvider = ({ children }) => {
    const [simulators, setSimulators] = useState([]);
    
    useEffect(() => {
    const fetchSimulators = async () => {
      try {
        const response = await axios.get('/api/exercises');
          setSimulators(response.data);        
      } catch (error) {
        console.error('Error fetching lectures:', error);
      }
    };

    fetchSimulators();
  }, []);

  return (
    <SimulatorsContext.Provider value={{ simulators, setSimulators }}>
      {children}
    </SimulatorsContext.Provider>
  );
};
export const useSimulators = () => useContext(SimulatorsContext);
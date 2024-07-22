import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

export const LecturesContext = createContext();

export const LecturesProvider = ({ children }) => {
    const [lectures, setLectures] = useState([]);
    
    useEffect(() => {
    const fetchLectures = async () => {
      try {
        const response = await axios.get('/api/lessons');
        setLectures(response.data);
      } catch (error) {
        console.error('Error fetching lectures:', error);
      }
    };

    fetchLectures();
  }, []);

  return (
    <LecturesContext.Provider value={{ lectures, setLectures }}>
      {children}
    </LecturesContext.Provider>
  );
};
export const useLectures = () => useContext(LecturesContext);
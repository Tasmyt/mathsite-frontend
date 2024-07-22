import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

export const VideosContext = createContext();

export const VideosProvider = ({ children }) => {
    const [videos, setVideos] = useState([]);
    
    useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get('/api/video');
          setVideos(response.data);        
      } catch (error) {
        console.error('Error fetching lectures:', error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <VideosContext.Provider value={{ videos, setVideos }}>
      {children}
    </VideosContext.Provider>
  );
};
export const useVideos = () => useContext(VideosContext);
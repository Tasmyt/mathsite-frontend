import React from 'react';
import VideoPage from '../../components/ContentForPage/VideoPage';

const topicsMath2 = [
    'Похідна',
    'Інтеграл',
    'Многогранники',    
    'Тіла та поверхні обертання',  
];

const VideoPageMath2 = () => {
  return <VideoPage topics={topicsMath2} />;
};

export default VideoPageMath2;
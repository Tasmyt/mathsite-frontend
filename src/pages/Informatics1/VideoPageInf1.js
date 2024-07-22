import React from 'react';
import VideoPage from '../../components/ContentForPage/VideoPage';

const topicsInf1 = [
    'Інформаційні технології',
    'Електронні таблиці',
    'База даних',
    'Мультимедіа',
    'Про сайти',
    'Figma', 
    'Верстка веб-сторінок',
    'Мультимедіа для веб'
];

const VideoPageInf1 = () => {
  return <VideoPage topics={topicsInf1} />;
};

export default VideoPageInf1;
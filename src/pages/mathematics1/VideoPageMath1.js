import React from 'react';
import VideoPage from '../../components/ContentForPage/VideoPage';

const topicsMath1 = [
    'Функції',
    'Степені та корені',
    'Показникова і логарифмічна функції',
    'Тригонометрія',
    'Теорія ймовірності',
    'Геометрія у просторі',  
];

const VideoPageMath2 = () => {
  return <VideoPage topics={topicsMath1} />;
};

export default VideoPageMath2;
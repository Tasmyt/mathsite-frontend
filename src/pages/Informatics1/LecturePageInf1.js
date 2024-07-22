import React from 'react';
import LecturePage from '../../components/ContentForPage/LectorPage';

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

const LecturePageInf1 = () => {
  return <LecturePage topics={topicsInf1} />;
};

export default LecturePageInf1;
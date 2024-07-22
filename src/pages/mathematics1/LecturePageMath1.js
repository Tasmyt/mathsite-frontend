import React from 'react';
import LecturePage from '../../components/ContentForPage/LectorPage';

const topicsMath2 = [
    'Функції',
    'Степені та корені',
    'Показникова і логарифмічна функції',
    'Тригонометрія',
    'Теорія ймовірності',
    'Геометрія у просторі',   
];

const LecturePageMath2 = () => {
  return <LecturePage topics={topicsMath2} />;
};

export default LecturePageMath2;

 
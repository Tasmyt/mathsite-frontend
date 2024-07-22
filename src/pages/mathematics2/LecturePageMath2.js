import React from 'react';
import LecturePage from '../../components/ContentForPage/LectorPage';

const topicsMath2 = [
  'Похідна',
  'Інтеграл',
  'Многогранники',    
  'Тіла та поверхні обертання',    
];

const LecturePageMath2 = () => {
  return <LecturePage topics={topicsMath2} />;
};

export default LecturePageMath2;
import React from 'react';
import SimulatorPage from '../../components/ContentForPage/SimulatorPage';

const topicsMath1 = [
    'Функції',
    'Степені та корені',
    'Показникова і логарифмічна функції',
    'Тригонометрія',
    'Теорія ймовірності',
    'Геометрія у просторі',  
];

const SimulatorPageMath1 = () => {
  return <SimulatorPage topics={topicsMath1} />;
};

export default SimulatorPageMath1;
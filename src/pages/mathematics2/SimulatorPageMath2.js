import React from 'react';
import SimulatorPage from '../../components/ContentForPage/SimulatorPage';

const topicsMath2 = [
    'Похідна',
    'Інтеграл',
    'Многогранники',    
    'Тіла та поверхні обертання',  
];

const SimulatorPageMath2 = () => {
  return <SimulatorPage topics={topicsMath2} />;
};

export default SimulatorPageMath2;
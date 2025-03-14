import React, { useState, useEffect } from 'react';
import { useAuth } from "hooks";
import { calculateAverage } from './calculateAverage';
import { DateP, EstimateLi, EstimateP, ResultConteiner, ResultH3, ResultP, ResultSemestrDiv, ResultUl, TextP } from './Estimate.stayled';

export default function ResultMath() {
    const { user } = useAuth();
    const semestr = user.semestr; 
    const [averageresultmath, setAverageresultmath] = useState(0);    
    useEffect(() => {
    if (semestr && semestr.length > 0) {
      const semestrmath = semestr
        .map(est => est.estimatesemestrmath)
        .filter(val => Number.isInteger(val));
      const avg = calculateAverage(semestrmath);
      setAverageresultmath(avg);
    }
  }, [semestr]);    
    
    return (
        <>
          <ResultH3>Підсумкове оцінювання</ResultH3>
          <ResultSemestrDiv>
            <ResultUl >
            {semestr.map(({ _id, titlemath, estimatesemestrmath }) => {
              if (!estimatesemestrmath) return null;
              return (
                <EstimateLi key={_id}>
                  <DateP>{titlemath}</DateP>
                  <EstimateP>{estimatesemestrmath}</EstimateP>
                  <TextP>балів</TextP>
                </EstimateLi>
              );    
            })}
            </ResultUl>
                <ResultConteiner>
                    <ResultP>Підсумкова</ResultP>
                    <EstimateP>{averageresultmath}</EstimateP>
                    <TextP>балів</TextP>
                </ResultConteiner>
            </ResultSemestrDiv>
        
        </>
    );
}
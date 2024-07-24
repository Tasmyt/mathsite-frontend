import React, { useState, useEffect } from 'react';
import { useAuth } from "hooks";
import { calculateAverage } from './calculateAverage';
import { DateP, EstimateLi, EstimateP, ResultConteiner, ResultH3, ResultP, ResultSemestrDiv, ResultUl, TextP } from './Estimate.stayled';

export default function ResultInf() {
    const { user } = useAuth();
    const semestr = user.semestr;  
    const [averageresultinf, setAverageresultinf] = useState(0);    
    useEffect(() => {
    if (semestr && semestr.length > 0) {
      const semestrinf = semestr
        .map(est => est.estimatesemestrinf)
        .filter(val => Number.isInteger(val));
      const avg = calculateAverage(semestrinf);
      setAverageresultinf(avg);
    }
  }, [semestr]);    
    
    return (
        <>
          <ResultH3>Пдсумкове оцінювання</ResultH3>
          <ResultSemestrDiv>
            <ResultUl >
            {semestr.map(({ _id, titleinf, estimatesemestrinf }) => {
              if (!estimatesemestrinf) return null;
              return (
                <EstimateLi key={_id}>
                  <DateP>{titleinf}</DateP>
                  <EstimateP>{estimatesemestrinf}</EstimateP>
                  <TextP>балів</TextP>
                </EstimateLi>
              ); 
            })}
            </ResultUl>
                <ResultConteiner>
                    <ResultP>Підсумкова</ResultP>
                    <EstimateP>{averageresultinf}</EstimateP>
                    <TextP>балів</TextP>
                </ResultConteiner>
            </ResultSemestrDiv>
        
        </>
    );
}
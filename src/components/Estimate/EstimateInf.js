import React, { useState, useEffect } from 'react';
import { useAuth } from "hooks";
import { DateP, EstimateDiv, EstimateLi, EstimateP, EstimateUl, ResultDiv, ResultP, TextP } from "./Estimate.stayled";
import { calculateAverage } from './calculateAverage'; 

export default function EstimateInf() {
    const { user } = useAuth();
    const estimate = user.rating;
    const [averageinf, setAverageinf] = useState(0);
    
    useEffect(() => {
    if (estimate && estimate.length > 0) {
      const estinf = estimate
        .map(est => est.estimateinf)
        .filter(val => Number.isInteger(val));
      const avg = calculateAverage(estinf);
      setAverageinf(avg);
    }
  }, [estimate]);
    return (
        <>
            <EstimateDiv>
                {estimate.map(({ _id, dateinf, estimateinf }) => (
                <EstimateUl key={_id}>
                
                { estimateinf ? (
                    <>
                    <EstimateLi >
                    <DateP>{dateinf}</DateP>
                    <EstimateP>{estimateinf}</EstimateP>
                    <TextP>балів</TextP>
                    </EstimateLi>
                    </>) : null
                }
                
                </EstimateUl>
            ))}
            </EstimateDiv>
             <ResultDiv>
                <ResultP>Семестр</ResultP>
                <EstimateP>{averageinf}</EstimateP>
                <TextP>бал</TextP>
            </ResultDiv>
        </>
    );
}
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'hooks';
import {
  Add,
  ButtonAdd,
  DateP,
  EstimateDiv,
  EstimateLi,
  EstimateP,
  EstimateUl,
  ResultDiv,
  ResultP,
  Semestr,
  TextP,
} from './Estimate.stayled';
import { calculateAverage } from './calculateAverage';
import { FaRegHandPointUp } from 'react-icons/fa';

export default function EstimateMath() {
  const { user } = useAuth();
  const estimate = user.rating;
  const [average, setAverage] = useState(0);

  useEffect(() => {
    if (estimate && estimate.length > 0) {
      const estmath = estimate
        .map(est => est.estimatemath);
      const avg = calculateAverage(estmath);
      setAverage(avg);
    }
  }, [estimate]);

const navigate = useNavigate();
   const handleButtonAddWork = () => {
    navigate('/addwork');
  };
  
  return (
    <>
      <EstimateDiv>
        <EstimateUl>
                  {estimate.map(({ _id, datemath, estimatemath }) => {
                      let textColor;

                      switch (true) {
                          case (estimatemath >= 1 && estimatemath <= 3):
                              textColor = '#DC3939';
                              break;
                          case (estimatemath >= 10 && estimatemath <= 12):
                              textColor = '#319E70';
                              break;
                          default:
                              textColor = 'inherit'; // Не змінювати колір
                      }
                        if (!estimatemath) return null;
                      return (
                          <EstimateLi key={_id}>
                              <DateP>{datemath}</DateP>
                              <EstimateP style={{ color: textColor }}>{estimatemath}</EstimateP>
                              <TextP>балів</TextP>
                          </EstimateLi>
                      );
                  })}
        </EstimateUl>
      </EstimateDiv>
      
      <Semestr>
        <ResultDiv>
          <ResultP>Семестр</ResultP>
          <EstimateP >{average}</EstimateP>
          <TextP>балів</TextP>
        </ResultDiv>
        {/* <Semestr> */}
        <Add>У тебе є можливість зробити додаткову роботу </Add>
        <ButtonAdd onClick={handleButtonAddWork}>
          Клікай сюди <FaRegHandPointUp />
        </ButtonAdd>
        {/* </Semestr> */}
      </Semestr>
    </>
  );
}

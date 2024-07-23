import React  from 'react';
import { Outlet, useOutlet } from 'react-router-dom';
import { Div, Img, MathInfH1, MathInfNav, MathInfNavLink } from 'components/customList/customList.styled';

export default function Informatics2() { 
    const outlet = useOutlet();

    return (
      <div>
        <MathInfH1>Інформатика 2 курс</MathInfH1>
        <MathInfNav>
          
            <MathInfNavLink to="lecture"  >Лекції</MathInfNavLink>
            <MathInfNavLink to="video">Відео</MathInfNavLink>
                      
        </MathInfNav>
        
        <div>
          {!outlet ? <>
                    <Div><p>Тут ви можете знайти теоретичний матеріал за темами 2 курсу інформатики.</p> 
                    <Img src="../../images/studying.webp" alt="Дівчина навчається"/>
                    </Div>
                    </>
                     :
                    <Outlet />}
        </div>
      </div>
    );
  }
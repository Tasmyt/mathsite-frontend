import React  from 'react';
import { Outlet, useOutlet } from 'react-router-dom';
import { Div, Img, MathInfH1, MathInfNav, MathInfNavLink } from 'components/customList/customList.styled';

export default function Mathematics2() {
  
  const outlet = useOutlet();

    return (
      <div>
        <MathInfH1>Математика 2 курс</MathInfH1>
        <MathInfNav>
          
            <MathInfNavLink to="lecture"  >Лекції</MathInfNavLink>
            <MathInfNavLink to="video">Відео</MathInfNavLink>
            <MathInfNavLink to="simulator">Тренажери</MathInfNavLink>
          
        </MathInfNav>
        
        <div>
          {!outlet ? <>
                    <Div><p>Тут ви можете знайти теоретичний і практичний матеріал за темами 1 курсу математики.</p> 
                    <Img src="../../images/studying.webp" alt="Дівчина навчається"/>
                    </Div>
                    </>
                     :
                    <Outlet />}
        </div>
      </div>
    );
  }
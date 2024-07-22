import { Outlet, useOutlet } from 'react-router-dom';
import { AddWorkDiv1, AddWorkDiv2, AddWorkH1, AddWorkLi, AddWorkLink, AddWorkSection, AddWorkUl } from "./addWork.styled";

export default function EstimateMath() {
    
const outlet = useOutlet();

return (
<>
    <AddWorkH1>Додаткова робота</AddWorkH1>
    <AddWorkSection>
            <AddWorkDiv1>
                <AddWorkUl>

                    <AddWorkLi>
                       <AddWorkLink to='requirements'>Вимоги до виконання додаткових завдань</AddWorkLink> 
                    </AddWorkLi>

                    <AddWorkLi>
                        <AddWorkLink to='theme'>Теми для завдань</AddWorkLink>                        
                    </AddWorkLi>

                    <AddWorkLi>
                        <AddWorkLink to='explanation'>Пояснення до ресурсів</AddWorkLink>                        
                    </AddWorkLi>

                </AddWorkUl>
            </AddWorkDiv1>

            <AddWorkDiv2>
                {!outlet ? <><p>Додаткову роботу можна виконати лише один раз за тему.</p> 
                    <p> Робота приймається до терміну виконання контрольної роботи, тобто протягом всієї теми.</p>
                    <p>Після контрольної роботи приймається додаткова робота вже з наступної теми.</p>
                    <p>Виконати декілька робіт з декількох тем одночасно не можна.</p></>
                     :
                    <Outlet />}
            </AddWorkDiv2>
    </AddWorkSection>
</>
)
     
    
}
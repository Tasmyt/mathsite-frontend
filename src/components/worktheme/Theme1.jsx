import { MainDiv, SubMainDiv, TitleThemeH3 } from "./theme.styled";
import { SubList } from "pages/private/addWork.styled";


export default function Theme1() {


return (
<><MainDiv>
    <SubMainDiv>
        <TitleThemeH3>Теми рефератів (доповідей, презентацій)</TitleThemeH3>
            <ul>
                <SubList>Історія  формування поняття "Функція"</SubList>
                <SubList>Способи задання функції</SubList>
                <SubList>Монотонність функцій</SubList>
                <SubList>Приклади використання функцій</SubList>
                <SubList>Побудова графіків степеневої функції</SubList>
                <SubList>Чудові Математичні криві: троянди і спіралі.  (тема для 11 балів)</SubList>
            </ul>
            <TitleThemeH3>Тема для інтелект - карт, кросвордів та інфографіки</TitleThemeH3>
            <ul>
                <SubList>Числові функції.</SubList>                               
            </ul>
        
    </SubMainDiv> 
    
    <SubMainDiv>   
        <TitleThemeH3>Теми для коміксів</TitleThemeH3>
            <ul>
                <SubList>Опис функції</SubList>
                <SubList>Лінійна функція</SubList>
                <SubList>Квадратична функція.</SubList>
                <SubList>Монотонність.</SubList>
                <SubList>Графік</SubList>
                <SubList>Використання функції.</SubList>
            </ul>
        <TitleThemeH3>Теми для створення відео</TitleThemeH3>
         <ul>
                <SubList>Приклади розв'язку задач з теми "Область визначення"</SubList>
                <SubList>Приклади розв'язку задач з теми "Парність функцій"</SubList>                
        </ul>
    </SubMainDiv>       
 </MainDiv>       
</>
)}
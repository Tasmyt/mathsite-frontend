import { MainDiv, SubMainDiv, TitleThemeH3 } from './theme.styled';
import { SubList } from 'pages/private/addWork.styled';

export default function Theme7() {
  return (
    <>
      <MainDiv>
        <SubMainDiv>
          <TitleThemeH3>Теми рефератів (доповідей, презентацій)</TitleThemeH3>
          <ul>
            <SubList>
              Використання похідної під час розв'язування економічних задач.
            </SubList>
            <SubList>
              Використання похідної під час розв'язування фізичних задач.
            </SubList>
            <SubList>Діофант і його рівняння.</SubList>
            <SubList>Внесок українських математиків у теорію функцій.</SubList>
          </ul>
          <TitleThemeH3>
            Тема для інтелект - карт, кросвордів та інфографіки
          </TitleThemeH3>
          <ul>
            <SubList>Похідна функції.</SubList>
          </ul>
        </SubMainDiv>

        <SubMainDiv>
          <TitleThemeH3>Теми для коміксів</TitleThemeH3>
          <ul>
            <SubList>
              Для якого числа різниця між ним і його квадратом є найменшою?
            </SubList>
            <SubList>
              Матеріальна точка рухається за законом: x(t)=3t<sup>2</sup>-2/3·t
              <sup>3</sup> (x вимірюється в метрах, t - у секундах). У який
              момент часу з проміжку [0;3] швидкість тіла буде найбільшою і
              найменшою?
            </SubList>
            <SubList>
              Акваріум об'ємом 4 м<sup>3</sup> має форму прямокутного паралелепіпеда з
              квадратним дном. Які розміри цього акваріуму, якщо на його
              виготовлення витатили найменш можливу кількість скла?              
            </SubList>
          </ul>
          <TitleThemeH3>Теми для створення відео</TitleThemeH3>
          <ul>
            <SubList>
              Приклади розв'язку задач з теми "Знаходження похідної"
            </SubList>
            <SubList>
              Приклади розв'язку задач з теми "Дослідження функції за допомогою похідної"
            </SubList>            
          </ul>
        </SubMainDiv>
      </MainDiv>
    </>
  );
}

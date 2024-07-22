import { MainDiv, SubMainDiv, TitleThemeH3 } from './theme.styled';
import { SubList } from 'pages/private/addWork.styled';

export default function Theme4() {
  return (
    <>
      <MainDiv>
        <SubMainDiv>
          <TitleThemeH3>Теми рефератів (доповідей, презентацій)</TitleThemeH3>
          <ul>
            <SubList>Історія виникнення тригонометрії.</SubList>
            <SubList>Термін "радіан" - походження.</SubList>
            <SubList>
              Вчений-енциклопедист Абу Райхан Аль-Біруні і тригонометричне коло.
            </SubList>
            <SubList>Періодичні функції у природі.</SubList>
          </ul>
          <TitleThemeH3>
            Тема для інтелект - карт, кросвордів та інфографіки
          </TitleThemeH3>
          <ul>
            <SubList>Тригонометричні формули.</SubList>
            <SubList>Тригонометричні функції.</SubList>
          </ul>
        </SubMainDiv>

        <SubMainDiv>
          <TitleThemeH3>Теми для коміксів</TitleThemeH3>
          <ul>
            <SubList>
              Еколог, що вивчає популяцію жуків плавунців протягом 8 тижнів,
              змоделював зміну їх кількості за допомогою функції
              K(t)=5+2sin(&#x213C;t/3), де t - кількість тижнів дослідження,
              0&#x2264;t&#x2264;8, а K(t) - кількість жуків плавунців у тисячах.
              На малюнку побудовано графік цієї функції. Встановіть: 
              <ul>
                <li>а. чисельність популяції на початку дослідження;</li>
                <li>б. чи зменшувалася кількість популяції жуків до 2000;</li>
                <li>в. найбільшу і найменшу чисельність популяції за час дослідження.</li>
              </ul>
              <img
                src="../../mathsite/images/smallimg/theme4.webp"
                alt="задача"
              ></img>
            </SubList>
            <SubList>
              За допомогою будь-якої комп'ютерної програми, що будує графіки,
              побудуйте графіки функцій: y=tg(x/4)-1; y=2sin(x-&#x213C;/4)+3;
              y=2cos(x/2+&#x213C;/3)-1.
            </SubList>
          </ul>
          <TitleThemeH3>Теми для створення відео</TitleThemeH3>
          <ul>
            <SubList>
              Приклади розв'язку задач з теми "Тригонометричні формули"
            </SubList>
            <SubList>
              Приклади розв'язку задач з теми "Тригонометричні рівняння"
            </SubList>
            <SubList>Приклади розв'язку задач з теми "Тригонометричні нерівності"</SubList>
          </ul>
        </SubMainDiv>
      </MainDiv>
    </>
  );
}

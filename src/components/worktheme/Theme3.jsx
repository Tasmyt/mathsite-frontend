import { MainDiv, SubMainDiv, TitleThemeH3 } from './theme.styled';
import { SubList } from 'pages/private/addWork.styled';

export default function Theme3() {
  return (
    <>
      <MainDiv>
        <SubMainDiv>
          <TitleThemeH3>Теми рефератів (доповідей, презентацій)</TitleThemeH3>
          <ul>
            <SubList>
              Застосування показникові функції до опису найпростіших реальних
              процесів.
            </SubList>
            <SubList>
              Застосування логарифмічної функції до опису найпростіших реальних
              процесів.
            </SubList>
            <SubList>Історія показникової функції.</SubList>
            <SubList>Історія логарифмічної функції.</SubList>
          </ul>
          <TitleThemeH3>
            Тема для інтелект - карт, кросвордів та інфографіки
          </TitleThemeH3>
          <ul>
            <SubList>Показникова функція</SubList>
            <SubList>Логарифмічна функція</SubList>
          </ul>
        </SubMainDiv>

        <SubMainDiv>
          <TitleThemeH3>Теми для коміксів</TitleThemeH3>
          <ul>
            <SubList>
              Ентомолог, вивчаючи причини нашестя сарани, дослідив, що площа (у
              м<sup>2</sup>), заражена сараною, змінюється за формулою S = 1000
              · 2<sup>0,2n</sup>, де n — кількість тижнів після зараження. Знайдіть: а.
              початкову площу зараження; б. заражену площу через 5 тижнів.
            </SubList>
            <SubList>
                          Розв’яжіть графічно нерівність 3<sup>х</sup> + х {`>`} 4.              
            </SubList>
          </ul>
          <TitleThemeH3>Теми для створення відео</TitleThemeH3>
          <ul>
            <SubList>
              Приклади розв'язку задач з теми "Показникова функція"
            </SubList>
            <SubList>Приклади розв'язку задач з теми "Логарифмічна функція"</SubList>
            <SubList>Методи розв'язання показникових рівнянь.</SubList>
          </ul>
        </SubMainDiv>
      </MainDiv>
    </>
  );
}

import { MainDiv, SubMainDiv, TitleThemeH3 } from './theme.styled';
import { SubList } from 'pages/private/addWork.styled';

export default function Theme2() {
  return (
    <>
      <MainDiv>
        <SubMainDiv>
          <TitleThemeH3>Теми рефератів (доповідей, презентацій)</TitleThemeH3>
          <ul>
            <SubList>Історія формування поняття "степінь" і "корінь"</SubList>
            <SubList>Обчислення степенів за допомогою калькулятора</SubList>
            <SubList>Степеневі функції</SubList>
            <SubList>Дмитро Олександрович Граве - видатний математик</SubList>
            <SubList>
              Дубенчук Олена Степанівна - педагог-математик України.
            </SubList>
          </ul>
          <TitleThemeH3>
            Тема для інтелект - карт, кросвордів та інфографіки
          </TitleThemeH3>
          <ul>
            <SubList>Степені</SubList>
            <SubList>Корені</SubList>
          </ul>
        </SubMainDiv>

        <SubMainDiv>
          <TitleThemeH3>Теми для коміксів</TitleThemeH3>
          <ul>
            <SubList>
              Справжньою екологічною проблемою сьогодні є "цвітіння води", що
              спричинене скупченням біля поверхні води ціанобактерій. Вода
              забарвлюється в синьо-зелений або коричневий колір і набуває
              болотного запаху, викликаного процесами гниття. У воді з'являються
              отруйні речовини, зменшується кількість кисню, унаслідок чого гине
              риба й інші водні мешканці. Уявіть, що ви перебували біля водойми
              протягом 3 годин. Скільки бактерій утвориться за цей час зі 100
              таких бактерій, якщо за сприятливих умов кожна ціанобактерія
              ділиться на дві ідентичні дочірні кожні 20 хвилин. Дізнайтеся, чи
              мають якусь користь ціанобактерії для людини.
            </SubList>
            <SubList>
              Розв'яжіть графічно рівняння, перевірте правильність виконання,
              побудувавши відповідні графіки за допомогою комп'ютерних програм.
              <p>&#x221B;x = 2 - x; &#x221A;x = 6</p>
              
            </SubList>
          </ul>
          <TitleThemeH3>Теми для створення відео</TitleThemeH3>
          <ul>
            <SubList>
              Приклади розв'язку задач з теми "Арифметичний корінь"
            </SubList>
            <SubList>
              Приклади розв'язку задач з теми "Степінь"
            </SubList>
          </ul>
        </SubMainDiv>
      </MainDiv>
    </>
  );
}

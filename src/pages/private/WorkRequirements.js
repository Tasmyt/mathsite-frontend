import { TitleContent } from "components/global.styled";
import { ConteinerForList, List, Sentence1, Sentence2, SubList, TextList, TitleH3, WorkSample } from "./addWork.styled";
import { FaRegFileAlt } from "react-icons/fa";
import { ButtonAdd } from "components/Estimate/Estimate.stayled";
import { CustomModal } from "components/CustomModal/CustomModal";
import React, { useState } from "react";
import Modal from "react-modal";
import { ModalTitle } from "components/CustomModal/CustomModal.styled";
Modal.setAppElement("#root");

export default function WorkRequirements() {
    const [modalIsOpen, setModalOpen] = useState(false);

    return (
        <> <TitleContent>Вимоги до виконання додаткових завдань</TitleContent>
            <TitleH3>Всі роботи повинні бути виконані українською мовою.</TitleH3>
            <ConteinerForList>
                <ol>
                    <List><Sentence1>Реферат (доповідь).</Sentence1> <Sentence2>Максимальна оцінка - 8 балів.</Sentence2>
                        <ul>
                            <SubList>Розмір шрифту реферату має бути 12 або 14.</SubList>
                            <SubList>Поля: верхня – 2 см, нижня – 1, 5 см, ліво – 2 см, право – 1, 5 см.</SubList>
                            <SubList>Титульна сторінка оформлена за зразком.</SubList>
                            <SubList>Друга сторінка – зміст. Повинен мати мінімум 6 пунктів (3 пункти).</SubList>
                            <SubList>Мінімальний обсяг роботи (навчального матеріалу) 12 сторінок (4), максимальний – 24 (8).</SubList>
                            <SubList>Наприкінці роботи – 12 контрольних запитань (6 запитань). (по 2 на кожний пункт плану)</SubList>
                            <SubList>Остання сторінка – використана література, посилання на джерела інформації з Інтернету.</SubList>
                        </ul>
                        <p>Зразок тітульної сторінки: <ButtonAdd onClick={() => setModalOpen(true)}> сюди <FaRegFileAlt /></ButtonAdd></p>
                        
                        <CustomModal isOpenModal={modalIsOpen} onClose={() => setModalOpen(false) }>
                            <ModalTitle>Зразок оформлення тітульної сторінки</ModalTitle>
                            <p>Дніпропетровський фаховий мистецько - художній коледж культури</p>
                            <h3>Реферат (доповідь)  з математики</h3>
                            <h3>Тема: ________________________________</h3>
                            <WorkSample>
                                <p>Виконал(а) студент(ка)  ____ курсу</p>
                                <p>ПІБ</p>
                            </WorkSample>
                            
                            <p>Дніпро, 20__</p>

                        </CustomModal>

                    </List>
                    <List><Sentence1>Інтелект - карта.</Sentence1> <Sentence2>Максимальна оцінка - 8 балів.</Sentence2>

                    </List>
                    <List><Sentence1>Презентація.</Sentence1> <Sentence2>Максимальна оцінка - 12 балів.</Sentence2>                        
                        <ul>
                            <SubList>Титульний слайд: тема, курс та прізвище, хто виконував</SubList>
                            <SubList>Другий слайд - зміст.</SubList>
                            <SubList>Обсяг - 8 - 15 основних слайдів. (Додаткових (яких не видно при показі) необмежено)</SubList> 
                            <SubList>Останній слайд - використана література, посилання на джерела інформації з Інтернету.</SubList>
                        </ul>
                        <TextList>Зверніть увагу: на 11 - 12 балів повинна бути навігація</TextList>
                    </List>
                    <List><Sentence1>Створення коміксів.</Sentence1> <Sentence2>Максимальна оцінка - 12 балів.</Sentence2>
                        
                    </List>
                    <List><Sentence1>Інфографіка.</Sentence1> <Sentence2>Максимальна оцінка - 12 балів.</Sentence2>
                        
                    </List>
                    <List><Sentence1>Кросворд.</Sentence1> <Sentence2>Максимальна оцінка - 11 балів.</Sentence2>
                        <TextList>Кросворд виконується в ворді і містить:</TextList>
                        <ol>
                            <SubList>Титульна сторінка: тема, курс та прізвище, хто виконував</SubList>
                            <SubList>Порожній кросворд</SubList>
                            <SubList>Заповнений кросворд</SubList> 
                            <SubList>Питання до кросворду.</SubList>
                        </ol>
                    </List>
                    <List><Sentence1>Створення відео.</Sentence1> <Sentence2>Максимальна оцінка - 12 балів.</Sentence2>
                        <TextList>Відео повинне містить розв'язок 2 - 3 прикладів.</TextList>
                    </List>
                </ol>
            </ConteinerForList>
           
        </>
    )
}
import { TitleContent } from "components/global.styled";
import { ButtonCurrentMonth, ConteinerForList, DivLine, ListCurrentMonth } from "./addWork.styled";
import { ModalTitle } from "components/CustomModal/CustomModal.styled";
import { CustomModal } from "components/CustomModal/CustomModal";
import { useState } from "react";
import { GoLog } from "react-icons/go";
import Modal from "react-modal";
import Theme1 from "components/worktheme/Theme1";
import Theme2 from "components/worktheme/Theme2";
import Theme3 from "components/worktheme/Theme3";
import Theme4 from "components/worktheme/Theme4";
import Theme5 from "components/worktheme/Theme5";
import Theme6 from "components/worktheme/Theme6";
import Theme7 from "components/worktheme/Theme7";
import Theme8 from "components/worktheme/Theme8";
import Theme9 from "components/worktheme/Theme9";
import Theme10 from "components/worktheme/Theme10";
Modal.setAppElement("#root");

const modalContent = [
    {
        title: "Числові функції.",
        content: <Theme1/>,
        months: [8],
    },
    {
        title: "Степені та корені.",
        content: <Theme2/>,
        months: [9],
    },
    {
        title: "Показникова і логарифмічна функції.",
        content: <Theme3/>,
        months: [10],
    },
    {
        title: "Тригонометрія.",
        content: <Theme4/>,
        months: [1, 2],
    },
    {
        title: "Теорія ймовірності.",
        content: <Theme5/>,
        months: [3],
    },
    {
        title: "Геометрія у просторі.",
        content: <Theme6/>,
        months: [4],
    },
    {
        title: "Похідна.",
        content: <Theme7/>,
        months: [8],
    },
    {
        title: "Інтеграл.",
        content: <Theme8/>,
        months: [9, 10],
    },
    {
        title: "Многогранники.",
        content: <Theme9/>,
        months: [11],
    },
    {
        title: "Фігури обертання.",
        content: <Theme10/>,
        months: [0,1],
    },
    
]

export default function WorkTheme() {
    const currentMonth = new Date().getMonth();    
    const [openModals, setOpenModals] = useState(Array(modalContent.length).fill(false));
    const openModal = (index) => {
        setOpenModals((prev) => {
            const newModals = [...prev];
            newModals[index] = true;
            return newModals;
        });
    };

    const closeModal = (index) => {
        setOpenModals((prev) => {
            const newModals = [...prev];
            newModals[index] = false;
            return newModals;
        });
    };
    
    return (
        <> <TitleContent>Теми для завдань</TitleContent>
            <ConteinerForList>
                <ol> 
                    {modalContent.map((modal, index) => {
                        const isCurrentMonth = modal.months.includes(currentMonth);
                        console.log(currentMonth);
                        console.log(isCurrentMonth);
                        return (
                            <ListCurrentMonth key={index} $isCurrentMonth={isCurrentMonth}>
                                {modal.title}
                                <DivLine $isCurrentMonth={isCurrentMonth}>
                                    <ButtonCurrentMonth
                                        $isCurrentMonth={isCurrentMonth}
                                        onClick={() => isCurrentMonth && openModal(index)}
                                        // onClick={() => currentMonth === isCurrentMonth && openModal(index)}
                                    >
                                        Теми робіт тут <GoLog />
                                    </ButtonCurrentMonth>
                                </DivLine>
                                <CustomModal
                                    isOpenModal={openModals[index]}
                                    onClose={() => closeModal(index)}
                                >
                                    <ModalTitle>{modal.title}</ModalTitle>
                                    {modal.content}
                                </CustomModal>
                            </ListCurrentMonth>
                        );
                    })}
                   
                </ol>
            </ConteinerForList>
        </>
    )
}
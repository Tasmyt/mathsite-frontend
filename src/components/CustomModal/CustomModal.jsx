import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { BsXLg } from "react-icons/bs";
import { ModalCloseButton, StyledContent, StyledOverlay, modalStyles } from "./CustomModal.styled";

export const CustomModal = ({ isOpenModal, onClose, children }) => {
    const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpenModal) {
      setIsClosing(false);
    }
  }, [isOpenModal]);
    
     const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300);
  };
    return (
        <Modal
        isOpen={isOpenModal && !isClosing}
        style={modalStyles}
        closeTimeoutMS={300}
        onRequestClose={handleClose}
        >
            <StyledOverlay $isClosing={isClosing}>
                <StyledContent $isClosing={isClosing}>
                    <ModalCloseButton onClick={handleClose}> <BsXLg /> </ModalCloseButton>
                    {children}
                </StyledContent>                
            </StyledOverlay>
            

        </Modal>                
    )
}



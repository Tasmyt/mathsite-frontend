import { useAddExercisMutation } from "customRedux/admin/adminSlice";
import { useRef } from "react";
import Modal from "react-modal";
import { ButtonForm, InputForm, LabelForm, StyledForm } from "./AddContent.styled";

Modal.setAppElement("#root");

export default function AddExercis() {
    const [addExercis] = useAddExercisMutation();
    const formRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData(e.currentTarget);
        const name = formData.get("name");
        const title = formData.get("title");
        const url = formData.get("url");

        const token = localStorage.getItem('accessToken');
        try {
      const result = await addExercis({ name, title, url, token }).unwrap();
      console.log('exercis added:', result);
      if (formRef.current) {
        formRef.current.reset(); // Очистка форми після успішного додавання студента
      }
    } catch (err) {
      console.error('Failed to add exercis:', err);      
    }
    };    

  return (
    <>
          <StyledForm autoComplete="off" onSubmit={handleSubmit} ref={formRef}>
            <LabelForm> Тема вправи
              <InputForm name="name" type="text" placeholder="Тема вправи" required />    
            </LabelForm> 
            <LabelForm> Назва вправи
              <InputForm name="title" type="text" placeholder="Назва вправи" required />    
            </LabelForm>
            <LabelForm> url вправи
              <InputForm name="url" type="text" placeholder="url вправи" required />    
            </LabelForm>
              <ButtonForm type="submit">Додати вправу</ButtonForm>
        </StyledForm>

    </>
  );
}
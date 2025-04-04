import { useAddLessonMutation } from "customRedux/admin/adminSlice";
import { useRef } from "react";
import Modal from "react-modal";
import { ButtonForm, InputForm, LabelForm, StyledForm } from "./AddContent.styled";

Modal.setAppElement("#root");

export default function AddLesson() {
    const [addLesson] = useAddLessonMutation();
    const formRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData(e.currentTarget);
        const name = formData.get("name");
        const title = formData.get("title");
        const url = formData.get("url");

        const token = localStorage.getItem('accessToken');
        try {
      const result = await addLesson({ name, title, url, token }).unwrap();
      console.log('Lesson added:', result);
      if (formRef.current) {
        formRef.current.reset(); // Очистка форми після успішного додавання студента
      }
    } catch (err) {
      console.error('Failed to add lesson:', err);      
    }
    };    

  return (
    <>
          <StyledForm autoComplete="off" onSubmit={handleSubmit} ref={formRef}>
            <LabelForm> Тема лекції
              <InputForm name="name" type="text" placeholder="Тема лекції" required />    
            </LabelForm> 
            <LabelForm> Назва лекції
              <InputForm name="title" type="text" placeholder="Назва лекції" required />    
            </LabelForm>
            <LabelForm> url лекції
              <InputForm name="url" type="text" placeholder="url лекції" required />    
            </LabelForm>
              <ButtonForm type="submit">Додати лекцію</ButtonForm>
        </StyledForm>

    </>
  );
}
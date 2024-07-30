import { useAddStudentMutation } from "customRedux/admin/adminSlice";
import { useRef } from "react";
import Modal from "react-modal";
import { ButtonForm, InputForm, LabelForm, StyledForm } from "./AddContent.styled";

Modal.setAppElement("#root");

export default function AddStudent() {
    const [addStudent] = useAddStudentMutation();
    const formRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData(e.currentTarget);
        const username = formData.get("username");
        const email = formData.get("email");
        const course = formData.get("course");

        const token = localStorage.getItem('accessToken');
        try {
      const result = await addStudent({ username, email, course, token }).unwrap();
      console.log('Student added:', result);
      if (formRef.current) {
        formRef.current.reset(); // Очистка форми після успішного додавання студента
      }
    } catch (err) {
      console.error('Failed to add student:', err);      
    }
    };    

  return (
    <>
          <StyledForm  autoComplete="off" onSubmit={handleSubmit} ref={formRef}>
            <LabelForm> Прізвище:
              <InputForm name="username" type="text" placeholder="Прізвище" required />    
            </LabelForm> 
            <LabelForm> email:
              <InputForm name="email" type="text" placeholder="email" required />    
            </LabelForm>
            <LabelForm> Курс:
              <InputForm name="course" type="text" placeholder="Курс" required />    
            </LabelForm>
              <ButtonForm type="submit">Додати студента</ButtonForm>
        </StyledForm >

    </>
  );
}
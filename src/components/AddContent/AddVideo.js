import { useAddVideoMutation } from "customRedux/admin/adminSlice";
import { useRef } from "react";
import Modal from "react-modal";
import { ButtonForm, InputForm, LabelForm, StyledForm } from "./AddContent.styled";

Modal.setAppElement("#root");

export default function AddVideo() {
    const [addVideo] = useAddVideoMutation();
    const formRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData(e.currentTarget);
        const name = formData.get("name");
        const title = formData.get("title");
        const url = formData.get("url");      

        const token = localStorage.getItem('accessToken');
        try {
      const result = await addVideo({ name, title, url, token }).unwrap();
      console.log('Video added:', result);
      if (formRef.current) {
        formRef.current.reset(); // Очистка форми після успішного додавання студента
      }
    } catch (err) {
      console.error('Failed to add Video:', err);      
    }
    };    

  return (
    <>
          <StyledForm autoComplete="off" onSubmit={handleSubmit} ref={formRef}>
            <LabelForm> Тема відео
              <InputForm name="name" type="text" placeholder="Тема відео" required />    
            </LabelForm> 
            <LabelForm> Назва відео
              <InputForm name="title" type="text" placeholder="Назва відео" required />    
            </LabelForm>
            <LabelForm> url відео
              <InputForm name="url" type="text" placeholder="url відео" required />    
            </LabelForm>
            
              <ButtonForm type="submit">Додати відео</ButtonForm>
        </StyledForm>

    </>
  );
}
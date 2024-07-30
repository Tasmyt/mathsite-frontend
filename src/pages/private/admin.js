// import { useAuth } from 'hooks';
import { Outlet } from 'react-router-dom';
import { AdminButton, AdminLink, AdminSection } from './admin.styled';
import { CustomModal } from 'components/CustomModal/CustomModal';
import AddStudent from 'components/AddContent/AddStudent';
import { useState } from 'react';
import AddLesson from 'components/AddContent/AddLesson';
import AddVideo from 'components/AddContent/AddVideo';
import AddExercis from 'components/AddContent/AddExercis';

export default function AdminPage() {   
  const [modalStudentIsOpen, setmodalStudentIsOpen] = useState(false);
  const [modalLessonIsOpen, setmodalLessonIsOpen] = useState(false);
  const [modalExercisIsOpen, setmodalExercisIsOpen] = useState(false);
  const [modalVideoIsOpen, setmodalVideoIsOpen] = useState(false);

  return (
    <>
      <AdminSection>
        <AdminButton onClick={() => {setmodalStudentIsOpen(true)} }>Студенти</AdminButton>
        <CustomModal isOpenModal={modalStudentIsOpen} onClose={() => {setmodalStudentIsOpen(false)}}>
          <AddStudent/>
        </CustomModal>

        <AdminButton onClick={() => {setmodalLessonIsOpen(true)} }>Лекції</AdminButton>
          <CustomModal isOpenModal={modalLessonIsOpen} onClose={() => {setmodalLessonIsOpen(false)}}>
          <AddLesson/>
        </CustomModal>

        <AdminButton onClick={() => {setmodalVideoIsOpen(true)} }>Відео</AdminButton>
          <CustomModal isOpenModal={modalVideoIsOpen} onClose={() => {setmodalVideoIsOpen(false)}}>
          <AddVideo/>
        </CustomModal>

        <AdminButton onClick={() => {setmodalExercisIsOpen(true)} }>Тренажери</AdminButton>
          <CustomModal isOpenModal={modalExercisIsOpen} onClose={() => {setmodalExercisIsOpen(false)}}>
          <AddExercis/>
        </CustomModal>
      </AdminSection>

      <section>
        <AdminLink to="math">Математика</AdminLink>
        <AdminLink to="inf">Інформатика</AdminLink>
      </section>
      <Outlet />

    </>
  );
}

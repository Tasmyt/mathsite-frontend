import React from 'react';
import { Outlet } from 'react-router-dom';
import { AdminCourseUl, AdminLink, AdminSectionCourse } from './admin.styled';

export default function InfAdmin() {
    
  const courses = [
    '1 ЦЕ',
    '1 В',
    '1 Р',
    '1 Х',
    '1 Т',
    '1 МСКД',
    '1 ЕН',
    '1 АВМ',
    '2 ЦЕ',
    '2 В',
    '2 Р',
    '2 Х',
    '2 Т',
    '2 МСКД',
    '2 ЕН',
    '2 АВМ',
  ]; 

  return (
    <>
      <AdminSectionCourse>
        <AdminCourseUl>
          {courses.map((course, index) => (
            <li key={index}><AdminLink to={`${course}`}>{course}</AdminLink></li>
          ))}
        </AdminCourseUl>
        <div>
        <Outlet />
        </div>
      </AdminSectionCourse>
    </>
  );
}
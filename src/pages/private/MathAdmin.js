import React from 'react';
import { Outlet } from 'react-router-dom';
import { AdminCourseUl, AdminLink, AdminSectionCourse } from './admin.styled';

export default function MathAdmin() {
    
  const courses = [
    '1 ЕТ',
    '1 ЦЖ',
    '1 ЕС',
    '1 ВТЗ',
    '1 НПМ',
    '1 НХ',
    '1 ОСКД',
    '1 ЕН',
    '1 АВМ',
    '2 ЕТ',
    '2 ЦЖ',
    '2 ЕС',
    '2 ВТЗ',
    '2 НПМ',
    '2 НХ',
    '2 ОСКД',
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

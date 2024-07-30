import React, { useCallback, useEffect, useState } from 'react';
import {
  useGetStudentsQuery,
  useUpdateStudentMutation,
} from 'customRedux/admin/adminSlice';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  DataButton,
  DataInput,
  FixedTd,
  FixedTh,
  Table,
  Td,
  Th,
} from 'pages/private/admin.styled';


const selectToken = state => state.auth.token;

export default function AdminTable({ date, estimate }) {  
  
  const token = useSelector(selectToken);
  const { adminId } = useParams();
  const { data: students = [], isLoading, refetch  } = useGetStudentsQuery();
  
  const [updateStudent] = useUpdateStudentMutation();
  const [localData, setLocalData] = useState([]);
  const [newRating, setNewRating] = useState({});
  const [currentCourse, setCurrentCourse] = useState(adminId);
  

  const saveChanges = useCallback(
    async studentId => {
      const student = localData.find(s => s._id === studentId);

      if (!student) {
        console.error('Student not found:', studentId);
        return;
      }
      
      const cleanStudentData = { email: student.email, rating: student.rating };
      const result = await updateStudent(
        { id: studentId, ...cleanStudentData },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (result.error) {
        console.error('Failed to save student:', result.error);
      } else { refetch() };
    },
    [localData, updateStudent, token, refetch ]
  );
 
  useEffect(() => {  
    
    if (!isLoading  &&students.length > 0 ) {      
      
      const filteredStudents = students.filter(
        student => student.course === adminId
      );
      console.log("Filtered Students:", filteredStudents);
      setLocalData(filteredStudents);
      setCurrentCourse(adminId);      
    }  
  }, [students, adminId, currentCourse, isLoading ]);

  

  const handleRatingChange = (studentId, index, field, value) => {
    setLocalData(prevData =>
      prevData.map(student =>
        student._id === studentId
          ? {
              ...student,
              rating: student.rating.map((ratingEntry, i) =>
                i === index ? { ...ratingEntry, [field]: value } : ratingEntry
              ),
            }
          : student
      )
    );
  };

  const handleNewRatingChange = (studentId, field, value) => {
    setNewRating(prevData => ({
      ...prevData,
      [studentId]: {
        ...prevData[studentId],
        [field]: value,
      },
    }));
  };

  const addNewRating = async studentId => {
    const newRatingEntry = newRating[studentId];
    
    if (newRatingEntry) {
      setLocalData(prevData =>
        prevData.map(student =>
          student._id === studentId
            ? {
                ...student,
                rating: [...student.rating, newRatingEntry],
              }
            : student
        )
      );

      const student = localData.find(s => s._id === studentId);
      
      const cleanStudentData = { email: student.email, rating: [...student.rating, newRatingEntry] };
          console.log('Clean Student Data:', cleanStudentData);
      const result = await updateStudent(
        {
          id: studentId,
          ...cleanStudentData,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
        console.log('Update Result:', result);
      if (result.error) {
        console.error('Failed to save student:', result.error);
      } else {
        refetch(); // додано refetch після успішного оновлення
      }

      setNewRating(prevData => ({
        ...prevData,
        [studentId]: {},
      }));
    }
  };

  if (isLoading ) return <div>Loading...</div>;

  return (
    <Table>
      <thead>
        <tr>
          <FixedTh>Прізвище</FixedTh>

          {students.length > 0 &&
            students[0].rating.map((rate, index) => (
              <React.Fragment key={index}>
                <Th>Дата</Th>
                <Th>Бал</Th>
                <Th>Дія</Th>
              </React.Fragment>
            ))}
          <Th>Дата</Th>
          <Th>Бал</Th>
          <Th>Дія</Th>
        </tr>
      </thead>
      <tbody>
        {localData.map(student => (
          <tr key={student._id}>
            <FixedTd>{student.username}</FixedTd>
            {student.rating.map((rate, index) => (
              <React.Fragment key={index}>
                <Td>
                  <DataInput
                    value={rate[date]}
                    onChange={e =>
                      handleRatingChange(
                        student._id,
                        index,
                        date,
                        e.target.value
                      )
                    }
                  />
                </Td>
                <Td>
                  <DataInput
                    value={rate[estimate]}
                    onChange={e =>
                      handleRatingChange(
                        student._id,
                        index,
                        estimate,
                        e.target.value
                      )
                    }
                  />
                </Td>
                <Td>
                  <DataButton onClick={() => saveChanges(student._id)}>
                    Save
                  </DataButton>
                </Td>
              </React.Fragment>
            ))}
            <React.Fragment>
              <Td>
                <DataInput
                  value={newRating[student._id]?.[date] || ''}
                  onChange={e =>
                    handleNewRatingChange(
                      student._id,
                      date,
                      e.target.value
                    )
                  }
                />
              </Td>
              <Td>
                <DataInput
                  value={newRating[student._id]?.[estimate] || ''}
                  onChange={e =>
                    handleNewRatingChange(
                      student._id,
                      estimate,
                      e.target.value
                    )
                  }
                />
              </Td>
              <Td>
                <button onClick={() => addNewRating(student._id)}>Add</button>
              </Td>
            </React.Fragment>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

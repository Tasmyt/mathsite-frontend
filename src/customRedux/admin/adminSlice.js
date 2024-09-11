import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const getToken = () => localStorage.getItem('accessToken');

export const adminSlice = createApi({
  reducerPath: 'adminApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://math-backend.onrender.com/api',
    tagTypes: ['users'],
    prepareHeaders: (headers) => {
      const token = getToken();
      
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    }
    
  }),
 
  endpoints: builder => ({
    getStudents: builder.query({
      query: () => '/users',
      providesTags: ['users'],
    }),

    updateStudent: builder.mutation({
      query: ({ id, ...student }) => {
        
        return {
          url: `/users/${id}`,
          method: 'PUT',
          body: student,
          headers: {
            Authorization: `Bearer ${student.token}`,
          },
        };
      },
    }),

    addStudent: builder.mutation({
      query: ({ username, email, course,  }) => {
        return {
          url: `/users`,
          method: 'POST',
          body: { username, email, course },
          
        };
      },
      invalidatesTags: [{ type: 'users' }],
    }),
  
    addLesson: builder.mutation({
      query: ({ name, title, url,  }) => {
        return {
          url: `/lessons`,
          method: 'POST',
          body: { name, title, url },          
        };
      },      
    }),
  
    addExercis: builder.mutation({
      query: ({ name, title, url,  }) => {
        return {
          url: `/exercises`,
          method: 'POST',
          body: { name, title, url },          
        };
      },      
    }),

    addVideo: builder.mutation({
      query: ({ name, title, url, 
 }) => {
        return {
          url: `/video`,
          method: 'POST',
          body: { name, title, url,  },          
        };
      },      
    }),
  }),
});

export const { useGetStudentsQuery, useUpdateStudentMutation, useAddStudentMutation, useAddLessonMutation, useAddExercisMutation, useAddVideoMutation } = adminSlice;
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todosApi = createApi({
  reducerPath: "todosApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/todos" }),
  tagTypes: ["Todos"],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "",

      providesTags: ["Todos"],
    }),

    addTodo: builder.mutation({
      query: ({
        title,
        description,
      }: {
        title: string;
        description: string;
      }) => ({
        url: "",
        method: "POST",
        body: {
          title,
          description,
        },
      }),
      invalidatesTags: ["Todos"],
    }),

    updateTodo: builder.mutation({
      query: (id: string) => ({
        url: `/${id}`,
        method: "PUT",
      }),
      invalidatesTags: ["Todos"],
    }),

    deleteTodo: builder.mutation({
      query: (id: string) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Todos"],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = todosApi;

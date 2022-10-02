import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts",
      providesTags: (result = []) => [
        "Post",
        ...result.map(({ id }) => ({ type: "Post", id })),
      ],
    }),
    getPost: builder.query({
      query: (postID) => `/posts/${postID}`,
      providesTags: (result, error, arg) => [{ type: "Post", id: arg }],
    }),
    addPost: builder.mutation({
      query: (post) => ({
        url: "/posts",
        method: "POST",
        body: post,
      }),
      invalidatesTags: ["Post"],
    }),
    deletePost: builder.mutation({
      query: (postID) => ({
        url: `posts/${postID}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Post"],
    }),
    updatePost: builder.mutation({
      query: (post) => ({
        url: `/posts/${post.id}`,
        method: "PUT",
        body: post,
      }),
      invalidatesTags: (result, error, arg) => [
        {
          type: "Post",
          id: arg.id,
        },
      ],
    }),
    getUsers: builder.query({
        query: () => "/users"
    })
  }),
});

export const {
  useGetPostsQuery,
  useGetPostQuery,
  useAddPostMutation,
  useDeletePostMutation,
  useUpdatePostMutation,
  useGetUsersQuery,
} = apiSlice;

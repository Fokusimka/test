import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PostDetailProps } from 'types';
const url = 'https://jsonplaceholder.org/'

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: url}),
    endpoints: (build) => ({
        getPosts: build.query<PostDetailProps[], string>({
            query: () => 'posts'
        }),
        getSelectedPost: build.query<PostDetailProps, string>({
            query: (id) => `posts/${id}`
        })
    })
});

export const { useGetPostsQuery, useGetSelectedPostQuery } = api;
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setCallList } from './call.reducer'

const API_BASE =
  process.env.API_BASE_URL ||
  'https://charming-bat-singlet.cyclic.app/https://cerulean-marlin-wig.cyclic.app'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE }),
  tagTypes: [ 'callLists', 'call' ],
  endpoints: (builder) => ({
    getAllCallLists: builder.query({
      query: () => '/activities',
      providesTags: [ 'callLists' ],
      transformResponse(response) {
        return response
      },
      transfromErrorResponse(err) {
        return err.data
      },
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled
          dispatch(setCallList(data.filter((call) => call.direction && call.from)))
        } catch (e) {
          dispatch(setCallList([]))
        }
      },
    }),
    getDetail: builder.query({
      query: (id) => `/activities/${id}`,
      providesTags: [ 'call' ],
      transformResponse(response) {
        return response
      },
      transfromErrorResponse(err) {
        return err.data
      },
    }),
    updateCall: builder.mutation({
      query: ({ id, state }) => ({
        method: 'PATCH',
        url: `/activities/${id}`,
        body: state,
      }),
      providesTags: [ 'call' ],
      transformResponse(response) {
        return response.data
      },
      transfromErrorResponse(err) {
        return err.data
      },
    }),
    reset: builder.mutation({
      query: () => ({
        method: 'PATCH',
        url: '/reset',
      }),
      providesTags: [ 'callLists' ],
      transformResponse(response) {
        return response.data
      },
      transfromErrorResponse(err) {
        return err.data
      },
    }),
  }),
})

export const {
  useGetAllCallListsQuery,
  useGetDetailQuery,
  useUpdateCallMutation,
  useResetMutation,
} = api

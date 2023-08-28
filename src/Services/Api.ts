import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const dataApi = createApi({
	reducerPath: 'dataApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
	tagTypes: ['Data'],
	endpoints: (build) => ({
		fetchAllData: build.query<any, any>({
			query: (limit = 100) => {
				return {
					url: '/periods',
					params: {
						_limit: limit,
					},
				};
			},
			// provideTags: (result) => ['Data'],
		}),
	}),
});

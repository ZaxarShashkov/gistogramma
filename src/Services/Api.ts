import { Period, dataObject } from '@/interfaces/data.interface';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const dataApi = createApi({
	reducerPath: 'dataApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
	tagTypes: ['Data'],
	endpoints: (build) => ({
		fetchAllData: build.query<Period[], number>({
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

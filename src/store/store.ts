import { dataApi } from '@/Services/Api';
import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
	[dataApi.reducerPath]: dataApi.reducer,
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(dataApi.middleware),
	});
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

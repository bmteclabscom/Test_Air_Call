import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { api } from './api';
import callReducer from './call.reducer';

const rootReducer = combineReducers({
  call: persistReducer(
    {
      key: 'call',
      storage,
      version: 1,
    },
    callReducer,
  ),
  [ api.reducerPath ]: api.reducer,
<<<<<<< HEAD
})
=======
});
>>>>>>> 75b3b27a025aad42872d4e052c3ee19c2a4ff90c

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [ FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER ],
      },
    }).concat(api.middleware),
});

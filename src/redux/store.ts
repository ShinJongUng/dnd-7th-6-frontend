import {configureStore} from '@reduxjs/toolkit';
import {combineReducers, Reducer, Store} from 'redux';

import mapReducer from './reducers/mapReducer';
import postReducer from './reducers/postReducer';
import postWriteReducer from './reducers/postWriteReducer';
import reviewReducer from './reducers/reviewReducer';
import tabBarReducer from './reducers/tabBarReducer';
import userReducer from './reducers/userReducer';

const rootReducer: Reducer = combineReducers({
  mapReducer,
  tabBarReducer,
  postReducer,
  reviewReducer,
  postWriteReducer,
  userReducer,
});

const store: Store = configureStore({reducer: rootReducer});

export type RootState = ReturnType<typeof rootReducer>;

export default store;

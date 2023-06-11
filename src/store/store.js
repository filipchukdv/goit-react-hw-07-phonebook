import { devToolsEnhancer } from '@redux-devtools/extension';
import { createStore } from 'redux';
import { reducer } from './reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const initialState = {
  contacts: [],
  filter: '',
};
const enhancer = devToolsEnhancer();
export const store = createStore(persistedReducer, initialState, enhancer);
export let persistor = persistStore(store);

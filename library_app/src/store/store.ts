import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import bookReducer from './reducers/bookReducer';


const rootReducer = combineReducers({
  books: bookReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

// Создаем Redux-хранилище
const store = createStore(
  rootReducer
);

export default store;

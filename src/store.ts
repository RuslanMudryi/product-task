import { legacy_createStore as createStore, applyMiddleware, compose, Middleware } from 'redux';
import { thunk } from 'redux-thunk'; // <-- Оновлений імпорт
import { productsReducer } from './reducers/productsReducer';
import { ProductType } from './types/ProductType';

type ProductsState = {
  products: ProductType[];
  loading: boolean;
  error: string | null;
};

export type RootState = ProductsState;
export type AppDispatch = typeof store.dispatch;

const composeEnhancers = (typeof window !== 'undefined' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const middlewares: Middleware[] = [thunk];

export const store = createStore(
  productsReducer,
  compose(applyMiddleware(...middlewares))
);
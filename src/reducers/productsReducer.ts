import { ProductType } from '../types/ProductType';
import { ProductsAction, ProductsActionTypes } from '../types/Actions';


type ProductsState = {
  products: ProductType[];
  loading: boolean,
  error: null | string,
}

const initialState: ProductsState = {
    products: [],
    loading: false,
    error: null,
  };
  

  export const productsReducer = (state = initialState, action: ProductsAction): ProductsState => {
    switch (action.type) {
      case ProductsActionTypes.FETCH_PRODUCTS_REQUEST:
        return { ...state, loading: true };
      case ProductsActionTypes.FETCH_PRODUCTS_SUCCESS:
        return { ...state, loading: false, products: action.payload };
      case ProductsActionTypes.FETCH_PRODUCTS_FAILURE:
        return { ...state, loading: false, error: action.payload };
      case ProductsActionTypes.ADD_PRODUCT:
        return { ...state, products: [...state.products, action.payload] };
      case ProductsActionTypes.DELETE_PRODUCT:
        return { ...state, products: state.products.filter((p) => p.id !== action.payload) };
      default:
        return state;
    }
  };
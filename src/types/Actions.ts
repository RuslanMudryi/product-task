import { ProductType } from "./ProductType";

export enum ProductsActionTypes {
    FETCH_PRODUCTS_REQUEST = "FETCH_PRODUCTS_REQUEST",
    FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS",
    FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE",
    ADD_PRODUCT = "ADD_PRODUCT",
    DELETE_PRODUCT = "DELETE_PRODUCT",
    UPDATE_PRODUCT = "UPDATE_PRODUCT"
  }
  
  interface FetchProductsRequestAction {
    type: ProductsActionTypes.FETCH_PRODUCTS_REQUEST;
  }
  
  interface ProductAction {
    type: ProductsActionTypes.UPDATE_PRODUCT;
    payload: ProductType;
  }
  
  interface FetchProductsSuccessAction {
    type: ProductsActionTypes.FETCH_PRODUCTS_SUCCESS;
    payload: ProductType[];
  }
  
  interface FetchProductsFailureAction {
    type: ProductsActionTypes.FETCH_PRODUCTS_FAILURE;
    payload: string;
  }
  
  interface AddProductAction {
    type: ProductsActionTypes.ADD_PRODUCT;
    payload: ProductType;
  }
  
  interface DeleteProductAction {
    type: ProductsActionTypes.DELETE_PRODUCT;
    payload: number;
  }
  
  export type ProductsAction =
    | FetchProductsRequestAction
    | FetchProductsSuccessAction
    | FetchProductsFailureAction
    | AddProductAction
    | DeleteProductAction
    | ProductAction;
import { Dispatch } from "redux";
import { ProductsAction, ProductsActionTypes} from "../types/Actions";
import { ProductType } from "../types/ProductType";

const API_URL = "http://localhost:5000/products";

export const fetchProducts = () => async (dispatch: Dispatch<ProductsAction>) => {
  dispatch({ type: ProductsActionTypes.FETCH_PRODUCTS_REQUEST });

  try {
    const response = await fetch(API_URL);
    const data: ProductType[] = await response.json();
    dispatch({ type: ProductsActionTypes.FETCH_PRODUCTS_SUCCESS, payload: data });
  } catch (error: unknown) {
        if (error instanceof Error) {
        dispatch({ type: ProductsActionTypes.FETCH_PRODUCTS_FAILURE, payload: error.message });
        } else {
        dispatch({ type: ProductsActionTypes.FETCH_PRODUCTS_FAILURE, payload: 'Unknown error' });
        }
    };
}

export const addProduct = (product: ProductType) => async (dispatch: Dispatch<ProductsAction>) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });

  const data: ProductType = await response.json();
  dispatch({ type: ProductsActionTypes.ADD_PRODUCT, payload: data });
};

export const deleteProduct = (id: number) => async (dispatch: Dispatch<ProductsAction>) => {
    console.log('starting delete');
    if (!id) {
      console.error("Product ID is missing!");
      return;
    }
  
    try {
      console.log(`Trying to delete product with ID: ${id}`);
      
      const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  
      if (!response.ok) {
        throw new Error(`Failed to delete: ${response.status} ${response.statusText}`);
      }
  
      console.log("Product deleted successfully!");
  
      dispatch({ type: ProductsActionTypes.DELETE_PRODUCT, payload: id });
    } catch (error) {
      console.log("Error while deleting product:", error);
    }
};

export const updateProduct = (product: ProductType) => async (dispatch: Dispatch<ProductsAction>) => {
    console.log("Starting update");
  
    try {
      const response = await fetch(`${API_URL}/${product.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });
  
      if (!response.ok) {
        throw new Error(`Failed to update: ${response.status} ${response.statusText}`);
      }
  
      const updatedProduct: ProductType = await response.json();
      console.log("Product updated successfully!", updatedProduct);
  
      dispatch({ type: ProductsActionTypes.UPDATE_PRODUCT, payload: updatedProduct });
    } catch (error) {
      console.log("Error while updating product:", error);
    }
};
  
  
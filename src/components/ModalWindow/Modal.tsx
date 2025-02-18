import React, { useState } from 'react';
import './Modal.css';
import { ProductType } from 'ProductType';
import { updateProduct } from '../../actions/actions';
import { useDispatch } from 'react-redux';


type Props = {
    selectedProduct: ProductType;
    setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
}
export const ModalForm: React.FC<Props> = ({selectedProduct, setIsEditing }) => {
    const [name, setName] = useState<string>(selectedProduct.name);
    const [imageUrl, setImageUrl] = useState<string>(selectedProduct.imageUrl);
    const [weight, setWeight] = useState<string>(selectedProduct.weight);
    const dispatch = useDispatch();

    const closeModal = () => setIsEditing(false);
    const submitHandle = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        selectedProduct.name = name;
        selectedProduct.imageUrl = imageUrl;
        selectedProduct.weight = weight;
        dispatch(updateProduct(selectedProduct));
        setIsEditing(false);
    }
  return (
    <>
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>×</button>
            
            <h2>Edit product</h2>
            <form onSubmit={submitHandle}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" value={name} onChange={(e) => {
                setName(e.target.value);
              }}/>
              
              <label htmlFor="weight">weight</label>
              <input type="text" id="weight" name="weight" value={weight} onChange={(e) => {
                setWeight(e.target.value);
              }}/>

            <label htmlFor="img">img</label>
              <input type="text" id="img" name="img" value={imageUrl} onChange={(e) => {
                setImageUrl(e.target.value);
              }}/>
              
              <button type="submit"  >Submit</button>
            </form>
          </div>
        </div>
    </>
  );
};


import React, { useState } from 'react';
import { ProductType } from '../../types/ProductType';
import './ProductCard.css';
import { deleteProduct } from '../../actions/actions';
import { useDispatch } from 'react-redux';
import { ModalForm } from '../ModalWindow/Modal';

type Props = {
  product: ProductType;
  setSelectedProduct: React.Dispatch<React.SetStateAction<ProductType | null>>
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
};


export const ProductCard: React.FC<Props> = ({ product, setIsEditing, setSelectedProduct }) => {

  
  const dispatch = useDispatch();

  const handleDelete = async () => {
    dispatch(deleteProduct(product.id));
  }

  
  const handleEdit = () => {
    setIsEditing(true);
    setSelectedProduct(product);
    console.log(product);
  }

  return (
    <>
    <div className="card" data-cy="movie-card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={product.imageUrl} alt="Product img" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-8">{product.name}</p>
          </div>
        </div>
        <div className="content">
          <p className="title is-8">{product.weight}</p>
          <p className="title is-8">height: {product.size.height} width:{product.size.width}</p>
        </div>
        <button className="button" onClick={handleEdit}>Edit</button>

        <button className="button" onClick={handleDelete}>Delete</button>

      </div>
    </div></>
  );
}



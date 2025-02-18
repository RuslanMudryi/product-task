import React, { useEffect, useState } from 'react';

import './ProductList.css';
import { ProductCard } from '../ProductCard/ProductCard';
import { ProductType } from '../../types/ProductType';
import { fetchProducts } from '../../actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { ModalForm } from '../ModalWindow/Modal';

interface Props {
}

export const ProductList: React.FC<Props> = () => {
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null);

    const dispatch = useDispatch();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { products }: RootState = useSelector(state => state);

    useEffect(() => {
        console.log(isEditing);
    }, [isEditing]);
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return(
        <>
            {isEditing && <ModalForm selectedProduct = {selectedProduct as ProductType} setIsEditing={setIsEditing}/>}
            <div className="products">
                {products.map(product => (
                <ProductCard key={product.id} setSelectedProduct = {setSelectedProduct} setIsEditing={setIsEditing} product={product} />
                ))}
            </div>
        </>
    )
};

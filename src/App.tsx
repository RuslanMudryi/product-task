import React from 'react';
import './App.css';
import { ProductList } from './components/ProductList/ProductList';

export const App = () =>  {
  return (
    <div className="page">
      <div className="page-content">
        <ProductList />
      </div>
    </div>
  );
}



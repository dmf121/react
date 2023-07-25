import React, {useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetailPage from '../ProductDetailPage/ProductDetailPage';


const ProductDetail = ({onAddToCart}) => {
    const { id } = useParams();
    const { category } = useParams();
    const productId = +id;

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
      async function fetchProducts() {
        try {
          const response = await fetch(`/products_${category}.json`);
          const data = await response.json();
          setProducts(data);
          setIsLoading(false);
        } catch (error) {
          console.error('Error fetching products:', error);
          setIsLoading(false);
        }
      }
      fetchProducts();
    }, [category]);

    const currentProduct = products.find((product) => product.id === productId);
    
   

  return (
    <div>
      {isLoading ? (
        <div className="container">
          <p>Loading...</p>
        </div>
      ) : (
      <ProductDetailPage currentProduct={currentProduct} onAddToCart={onAddToCart}/>
      )}
    </div>
  );
};

export default ProductDetail;
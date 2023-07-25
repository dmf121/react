import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import ProductCard from '../../../productCard/ProductCard';

const Men = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      async function fetchProducts() {
        try {
          const response = await fetch('/products_men.json');
          const data = await response.json();
          setProducts(data);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      }
      fetchProducts();
    }, []);
  
    return (
      <div >
        <div className="container">
            <div className="text-center py-5"><h3>MEN</h3></div>
            <div className="row">
                {products.map((product) => (
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6" key={product.id}>
                        <Link to={`/product/${product.category}/${product.id}`}>
                          <ProductCard key={product.id} product={product} />
                          </Link>
                    </div>
                ))}
            </div>
        </div>
      </div>
    );
  };

export default Men
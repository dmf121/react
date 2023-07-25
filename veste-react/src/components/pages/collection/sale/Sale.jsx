import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import ProductCard from '../../../productCard/ProductCard';

const Sale = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
          try {
            const response = await Promise.all([
              fetch('/products_men.json'),
              fetch('/products_women.json'),
              fetch('/products_accessories.json'),
            ]);
            const dataArray = await Promise.all(response.map((res) => res.json()));
            const mergedData = dataArray.reduce((acc, curr) => acc.concat(curr), []);
            setProducts(mergedData);
          } catch (error) {
            console.error('Error fetching products:', error);
          }
        }
        fetchProducts();
      }, []);
      
  
    return (
      <div >
        <div className="container">
            <div className="text-center py-5"><h3>SALE</h3></div>
            <div className="row">
                {products.map((product) => ( 
                    <React.Fragment key={product.id}>
                        {product.sale ? (
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                <Link to={`/product/${product.category}/${product.id}`}>
                                    <ProductCard  product={product} />
                                </Link>
                            </div>
                        ) : (<></>)}
                    </React.Fragment>
                ))}
            </div>
        </div>
      </div>
    );
  };

export default Sale
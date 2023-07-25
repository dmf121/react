import React, {useState, useEffect} from 'react'
import ProductCard from '../../../productCard/ProductCard'
import { Link } from 'react-router-dom';


const HomeArrivals = () => {
    const [cards, setCards] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await Promise.all([
            fetch('/products_men.json'),
            fetch('/products_women.json'),
            fetch('/products_accessories.json'),
          ]);
          const data =  await Promise.all(response.map((res) => res.json()));
          const dataCards = data.map(items => items[items.length-1])
          setCards(dataCards)
        } catch (error) {
          console.error('Error fetching images:', error);
        }
      };
      fetchData();
    }, []);


  return (
    <div>
        <div className="container">
            <div className="row py-5">
                <div className="col py-5 text-center"><h1>NEW ARRIVALS</h1></div>
            </div>

            <div className="row justify-content-around">
                {cards.map((product) => (
                    <div className="col-xl-4 col-lg-4 col-sm-12 d-flex justify-content-center" key={product.id}>
                        <Link to={`/product/${product.category}/${product.id}`}>
                          <ProductCard key={product.id} product={product} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default HomeArrivals
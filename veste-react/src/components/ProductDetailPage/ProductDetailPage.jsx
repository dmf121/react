import React, {useState, useEffect} from 'react'
import { Link, useNavigate  } from 'react-router-dom';



import styles from './ProductDetailPage.module.scss'

const ProductDetailPage = ({ currentProduct, onAddToCart }) => {

    const [added, setAdded] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [updatedProduct, setUpdatedProduct] = useState(currentProduct);

    const handleAddToCart = () => {
        const product = updatedProduct
        setAdded(true)
        onAddToCart(product); 
      };

      const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        setAdded(false)
      };

      useEffect(() => {
        setUpdatedProduct(prevProduct => ({
          ...prevProduct,
          article: `${prevProduct.article}-${selectedOption}`,
          options: `${selectedOption}`
        }));
      }, [selectedOption]);
     

      const navigate  = useNavigate ();

  return (
    <div>
        <div className="container">
            <Link onClick={() => navigate(-1)}>
                <button className='back-btn'>
                    <img src="../../img/back-btn.png" alt="" />
                    Back
                </button>
            </Link>
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div className={styles.image}>
                        <div id="carouselExampleIndicators" className="carousel slide">
                            <div className="carousel-indicators">
                                {currentProduct.photos.map((element, index) => (
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index} className={index === 0 ? 'active' : ''} aria-current={index === 0 ? 'true' : 'false'} aria-label={`Slide ${index+1}`} key={index}></button>
                                ))}
                            </div>
                            <div className="carousel-inner">
                                {currentProduct.photos.map((element, index) => (
                                    <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                                        <img src={`../.${element}`} alt={currentProduct.name} />
                                    </div>
                                ))}
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            </button>
                        </div>
                    </div>
                    <p className='p-4'>{currentProduct.shortDescription}</p>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <h2>{currentProduct.name}</h2>
                    <p>{currentProduct.article}</p>
                    {currentProduct.sale ? ( 
                        <div className='d-flex'>
                            <p style={{ textDecoration: 'line-through' }}>{`$${currentProduct.price}`}</p>
                            <h5 className='px-3'>{`$${currentProduct.newPrice}`}</h5>
                        </div>
                    ) : (
                        <h5>{`$${currentProduct.price}`}</h5>
                    )}
                    <div className="row pt-4">
                        <div className="col">
                            <select className="col-xl-2 col-lg-4 col-md-6 col-sm-8 col-xs-12" id="inputGroupSelect01" value={selectedOption} onChange={handleOptionChange}>
                            <option value=""> {currentProduct.category === 'accessories'? 'Color:': 'Sizes:'}</option>
                             
                                {currentProduct.options.map((size, index) => (
                                    <option key={index} value={size}>{size}</option>
                                ))}
                            </select>
                            {}
                        </div>
                    </div>
                    
                    <div className="row py-5">
                        <div className="col-xl-8 col-lg-10 col-md-12 col-sm-10 d-flex justify-content-between">
                            <div className="col-9"><button className={styles.buyButton} onClick={handleAddToCart} disabled={added || selectedOption === ""}>
                                { added ? 'ADDED TO CART' : 'ADD TO CART'}
                                </button></div>
                        </div>
                    </div>
                    <button className={styles.description} type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        Product Info
                    </button>
                    <div className="collapse mb-5" id="collapseExample">
                        <div className="card card-body">
                            {currentProduct.detailedDescription}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetailPage
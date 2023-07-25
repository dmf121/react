import React, { useState, useEffect, useRef  } from 'react'

import styles from './Lookbook.module.scss'
import { Link } from 'react-router-dom';


const Lookbook = () => {
  const containerRef = useRef(null);
  const [imagesMen, setImagesMen] = useState([]);
  const [imagesWomen, setImagesWomen] = useState([]);
  const [leftOffsetMen, setLeftOffsetMen] = useState(0);
  const [leftOffsetWonen, setLeftOffsetWomen] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Promise.all([
          fetch('/products_men.json'),
          fetch('/products_women.json'),
        ]);
        const data =  await Promise.all(response.map((res) => res.json()));
        
        const dataMenPhotos = data[0].map(item => item.photos.map(photos=>photos))
        setImagesMen(dataMenPhotos.map(item => item[0]))
        const dataWomenPhotos = data[1].map(item => item.photos.map(photos=>photos))
        setImagesWomen(dataWomenPhotos.map(item => item[0]))
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const imageWidth = 325;
    const container = containerRef.current;
    const galleryWidth = container.offsetWidth;
    const interval = setInterval(() => {
      if (leftOffsetMen <= -((imagesMen.length-1) * imageWidth - galleryWidth)) {
        setLeftOffsetMen(0);
      } else {
        setLeftOffsetMen((prevOffset) => prevOffset - imageWidth);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [imagesMen, leftOffsetMen]);

  useEffect(() => {
    const imageWidth = 325;
    const container = containerRef.current;
    const galleryWidth = container.offsetWidth;
    const interval = setInterval(() => {
      if (leftOffsetWonen <= -((imagesWomen.length-1) * imageWidth - galleryWidth)) {
        setLeftOffsetWomen(0);
      } else {
        setLeftOffsetWomen((prevOffset) => prevOffset - imageWidth);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [imagesWomen, leftOffsetWonen]);


  return (
    <div >
      <div className="text-center py-5">
        <h3>LOOKBOOK</h3>
        <p>Spring / Summer 2035</p>
      </div>

      <div className="image-gallery" 
          style={{ transform: `translateX(${leftOffsetMen}px)`, display: 'flex',   transition: 'transform 0.5s ease-in-out'
        }} ref={containerRef}>
            {imagesMen.map((image, index) => (
              <img key={index} src={image} alt={`${index}`} className={styles.image} />
            ))}
       </div>
      <div className='text-center'>
        <Link to='/men'><button className={styles.btn}>Shop Men</button></Link>|
        <Link to='/women'><button className={styles.btn}>Shop Women</button></Link>
      </div>
      <div className="image-gallery" 
          style={{ transform: `translateX(${leftOffsetWonen}px)`, display: 'flex',   transition: 'transform 0.5s ease-in-out'
        }} ref={containerRef}>
            {imagesWomen.map((image, index) => (
              <img key={index} src={image} alt={`${index}`} className={styles.image} />
            ))}
       </div>
    </div>

    
  )
}

export default Lookbook
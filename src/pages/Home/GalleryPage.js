import React, { useEffect, useRef } from 'react';
import picture from '../../assets/farming.png';
import picture2 from '../../assets/asperagus.jpg';
import picture3 from '../../assets/grass.jpg';
import picture4 from '../../assets/LoZ.gif';
import './GalleryPage.css';

const images = [picture, picture2, picture3, picture4, picture2, picture3, picture, picture3, picture, picture4, picture2, picture];

const GalleryPage = () => {
    const imageRefs = useRef([]);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.firstChild.classList.add('grow'); // Adding the class to the img element
            }
          });
        },
        { threshold: 0.1 }
      );
  
      imageRefs.current.forEach((img) => {
        if (img) observer.observe(img);
      });
  
      return () => {
        imageRefs.current.forEach((img) => {
          if (img) observer.unobserve(img);
        });
      };
    }, []);
  
    return (
        <div>
          <div className='title'>Gallery</div>
          <div className="image-gallery">
            {images.map((image, index) => (
              <div 
                key={index} 
                ref={el => imageRefs.current[index] = el}
                className="image-wrapper"
              >
                <img
                  alt={'Event'}
                  src={image}
                  className="image"
                  id={`img-${index}`}
                />
                <div className="overlay">
                  Image Description
                </div>
              </div>
            ))}
          </div>
        </div>
      );
  };
    
  export default GalleryPage;
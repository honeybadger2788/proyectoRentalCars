import { useEffect, useState } from 'react';

import Lightbox from 'react-18-image-lightbox';
import Slider from 'react-slick';

import 'react-18-image-lightbox/style.css';
import styles from './Images.module.css';

function Images({ images }) {
  const imagesArray = images.map((image) => image.url);

  // open state for lightbox for desktop
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  // screen size
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const setWindowDimensions = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', setWindowDimensions);
    return () => {
      window.removeEventListener('resize', setWindowDimensions);
    };
  }, []);

  // settings for Lightbox component for desktop
  const lightboxSettings = {
    mainSrc: imagesArray[photoIndex],
    nextSrc: imagesArray[(photoIndex + 1) % imagesArray.length],
    prevSrc:
      imagesArray[(photoIndex + imagesArray.length - 1) % imagesArray.length],
    onCloseRequest: () => setIsOpen(false),
    onMovePrevRequest: () => {
      setPhotoIndex((photoIndex + imagesArray.length - 1) % imagesArray.length);
    },
    onMoveNextRequest: () => {
      setPhotoIndex((photoIndex + 1) % imagesArray.length);
    },
  };

  // settings for Slider component for mobile and tablet
  const sliderSettings = {
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false,
    cssEase: 'linear',
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 2000,
  };

  return (
    <section className={styles.container}>
      {/* Desktop */}
      {windowWidth > 820 && (
        <div className={styles.gridContainer}>
          {images.slice(0, 5).map((image) => (
            <img key={image.id} src={image.url} alt={image.title} />
          ))}
          <div className={styles.openLightbox} onClick={() => setIsOpen(true)}>
            Ver más
          </div>
          {isOpen && <Lightbox {...lightboxSettings} />}
        </div>
      )}

      {/* Mobile and Tablet */}
      {windowWidth <= 820 && (
        <Slider {...sliderSettings} className={styles.slider}>
          {images.map((image, index) => (
            <article key={image.id} className={styles.imgContainer}>
              <img src={image.url} alt={image.title} />
              <div className={styles.index}>
                {index + 1}/{images.length}
              </div>
            </article>
          ))}
        </Slider>
      )}
    </section>
  );
}

export default Images;

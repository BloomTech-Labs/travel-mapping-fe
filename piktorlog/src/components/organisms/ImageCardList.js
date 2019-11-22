import React from 'react';
import ImageCard from '../molecules/imageCard.js';

const ImageCardList = ({ images }) => {
  return (
    <React.Fragment>
      {images.map((image, key) => (
        <ImageCard image={image} key={key} />
      ))}
    </React.Fragment>
  );
};

export default ImageCardList;

import React from 'react';
import MediaCard from '../molecules/MediaCard'

const MediaCardList = ({albumMedia}) => {
    return (
        <>
        {albumMedia.map((mediaItem, index) => (
            <MediaCard mediaItem = {mediaItem} index = {index} />
        ))}
        </>
    );
};

export default MediaCardList;

























// // Eric's code for same component

// import React from 'react';
// import ImageCard from '../molecules/imageCard.js';

// const ImageCardList = ({ images }) => {
//   return (
//     <React.Fragment>
//       {images.map((image, key) => (
//         <ImageCard image={image} key={key} />
//       ))}
//     </React.Fragment>
//   );
// };

// export default ImageCardList;

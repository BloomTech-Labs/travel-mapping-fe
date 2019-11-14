import React, { useState } from 'react';
import NavBar from '../components/organisms/NavBar';

const UploadPage = () => {
  const [activeNavItem, setActiveNavItem] = useState('');
  const handleNavItemClick = (e, { name }) => setActiveNavItem(name);

  const [images, setImages] = useState([]);

  const handleImageSelect = e => {
    setImages([...images, ...e.target.files]);
  };

  console.log(images);
  return (
    <React.Fragment>
      <NavBar
        header='Piktorlog'
        activeItem={activeNavItem}
        handleClick={handleNavItemClick}
      />
      <div>Upload photos</div>
      <form action="">
        <input 
          type="file"
          onChange={handleImageSelect}
        />
      </form>
      {
        images.map((e, i) => (
          <img key={i} src={URL.createObjectURL(e)} alt="" />
        ))
      }
    </React.Fragment>
  );
};

export default UploadPage;
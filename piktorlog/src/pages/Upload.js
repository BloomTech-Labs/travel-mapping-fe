import React, { useState } from 'react';
import NavBar from '../components/organisms/NavBar';

const UploadPage = () => {
  const [activeNavItem, setActiveNavItem] = useState('');
  const handleNavItemClick = (e, { name }) => setActiveNavItem(name);

  return (
    <React.Fragment>
      <NavBar
        header='Piktorlog'
        activeItem={activeNavItem}
        handleClick={handleNavItemClick}
      />
      <div>Upload photos</div>
    </React.Fragment>
  );
};

export default UploadPage;
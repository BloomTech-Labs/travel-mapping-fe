import React, { useState, useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import NavBar from '../components/organisms/NavBar';
import axios from 'axios';

const UploadPage = () => {
  const [activeNavItem, setActiveNavItem] = useState('');
  const handleNavItemClick = (e, { name }) => setActiveNavItem(name);

  const [images, setImages] = useState([]);
  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles);
    setImages(prev => [...prev, ...acceptedFiles]);
  }, []);
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    // query server for currentUser's albums
  }, []);

  const handleSubmit = () => {
    axios.post('http://localhost:4000', {
      images,
    })
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
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {
          isDragActive ?
            <p>Drop the files here ...</p> :
            <p>Drag 'n' drop some files here, or click to select files</p>
        }
      </div>
      <button onClick={handleSubmit}>
        Submit
      </button>
      {/* {
        images.map((e, i) => (
          <img key={i} src={URL.createObjectURL(e)} alt="" />
        ))
      } */}
    </React.Fragment>
  );
};

export default UploadPage;
import React from 'react';
import { useDropzone } from 'react-dropzone';
import styled from 'styled-components';

import { Segment } from 'semantic-ui-react';

const Zone = styled(Segment)`
  padding: 0 !important;

  div {
    width: 100%;
    height: 8rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Dropzone = ({ onDrop }) => {
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});
  return (
    <Zone>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive
          ? <p>Drop the files here ...</p>
          : <p>Drag 'n' drop some files here, or click to select files</p>}
      </div>
    </Zone>
  );
};

export default Dropzone;
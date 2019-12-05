import React from 'react';
import { useDropzone } from 'react-dropzone';

import { Segment } from 'semantic-ui-react';

const Dropzone = ({ onDrop }) => {
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});
  return (
    <Segment>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive
          ? <p>Drop the files here ...</p>
          : <p>Drag 'n' drop some files here, or click to select files</p>}
      </div>
    </Segment>
  );
};

export default Dropzone;
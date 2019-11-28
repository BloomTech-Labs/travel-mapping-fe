import React from 'react';

import UploadForm from '../molecules/UploadForm';

const UploadFormList = ({ media, setMedia, removeMedia }) => {

  return Object.values(media).map(e => (
    <UploadForm key={e.id} media={e} setMedia={setMedia} removeMedia={removeMedia} />
  ));
};

export default UploadFormList;
import React, { useState, useEffect } from 'react';
import {} from 'semantic-ui-react';

import { getUserAlbums } from '../store/requests/albums';

const UploadAlbumCheckList = ({ user_id, setSelectedAlbums }) => {
  const [availableAlbums, setAvailableAlbums] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await getUserAlbums(user_id);
      console.log(data);
      setAvailableAlbums(data);
    })();
  }, [user_id]);

  return (
    <div></div>
  );
};

export default UploadAlbumCheckList;
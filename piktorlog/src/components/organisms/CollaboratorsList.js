import React from 'react';

import { useGetCollabAlbum, useLogOnChange } from '../../store/requests/hooks';

const CollaboratorsList = ({ album_id }) => {

  const [collaborators] = useGetCollabAlbum(album_id);
  useLogOnChange(`album ${album_id} collabs:`, collaborators)

  return (
    <div>collabList</div>
  )

};

export default CollaboratorsList;
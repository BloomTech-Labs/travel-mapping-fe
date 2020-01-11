import React from 'react';

import AddCollaboratorsForm from '../molecules/AddCollaboratorsForm';
import AlbumInvitesList from '../molecules/AlbumInvitesList';
import { useGetInvitesByAlbum, useLogOnChange } from '../../store/requests/hooks';

const AlbumInvites = ({ album_id }) => {

  const [invites, , , refreshInvites] = useGetInvitesByAlbum(album_id);
  useLogOnChange('invites:', invites);

  return (
    <div>
      AlbumInvites
      <AddCollaboratorsForm album_id={album_id} refresh={refreshInvites} />
      <AlbumInvitesList invites={invites} refresh={refreshInvites} />
    </div>
  );

};

export default AlbumInvites;
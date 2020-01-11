import React from 'react';

const AlbumInvitesList = ({ invites }) => {

  return (
    <div>
      AlbumInvitesList
      <ul>
        {invites.map(e => (<li key={e.invitation_id}>{e.invited_user_id}</li>))}
      </ul>
    </div>
  );

};

export default AlbumInvitesList;
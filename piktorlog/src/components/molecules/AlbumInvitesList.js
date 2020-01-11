import React from 'react';

import { Button } from 'semantic-ui-react';

import { useCancelInvite } from '../../store/hooks/useFetchOnRequest';

const AlbumInvitesList = ({ invites, refresh }) => {

  const [cancelInvite] = useCancelInvite(refresh);

  return (
    <div>
      AlbumInvitesList
      <ul>
        {invites.map(e => (
          <li key={e.invitation_id}>
            <span>{e.invited_user_name}</span>
            <Button onClick={() => cancelInvite(e.invitation_id)}>
              Cancel Invite
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );

};

export default AlbumInvitesList;
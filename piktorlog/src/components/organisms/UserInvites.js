import React from 'react';

import { List, Image, Button } from 'semantic-ui-react';

import { useGetInvitesToUser } from '../../store/hooks/useImmediateFetch';
import { useCancelInvite } from '../../store/hooks/useFetchOnRequest';
import { useLogOnChange } from '../../store/hooks/misc';

const UserInvites = ({ user_id }) => {

  const [invites, , , refreshInvites] = useGetInvitesToUser(user_id);
  useLogOnChange('invites', invites);

  const [cancelInvite] = useCancelInvite(refreshInvites);

  return (
    <div>
    <h3>UserInvites</h3>
    <List>
        {invites.map(e => (
          <List.Item key={e.album_id}>
            <Image size="mini" inline src={e.cover_url} />
            <List.Content>
              <List.Header>{e.title}</List.Header>
              <List.Description>
                {e.description}
              </List.Description>
            </List.Content>
            <Button onClick={() => cancelInvite(e.invitation_id)}>
              Decline
            </Button>
          </List.Item>
        ))}
      </List>
    </div>
  );

};

export default UserInvites;
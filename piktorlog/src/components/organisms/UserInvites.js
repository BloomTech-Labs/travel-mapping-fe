import React from 'react';

import { List, Image, Button } from 'semantic-ui-react';

const UserInvites = ({ invites, cancelInvite, acceptInvite }) => {

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
            <Button onClick={() => acceptInvite(e.invitation_id)}>
              Join
            </Button>
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
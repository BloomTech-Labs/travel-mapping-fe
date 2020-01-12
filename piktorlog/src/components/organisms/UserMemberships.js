import React, { useState } from 'react';

import { List, Image, Modal, Button } from 'semantic-ui-react';

import { useGetUserAlbums } from '../../store/hooks/useImmediateFetch';
import { useRemoveCollab } from '../../store/hooks/useFetchOnRequest';
import { useLogOnChange } from '../../store/hooks/misc';

const UserMemberships = ({ user_id }) => {

  const [filterAlbumsFn] = useState(() => (data) => data.filter(e => e.user_id !== user_id));
  const [albums, , , refreshAlbums] = useGetUserAlbums(user_id, filterAlbumsFn);
  useLogOnChange('albums', albums);

  const [removeCollab] = useRemoveCollab(refreshAlbums);

  return (
    <div>
      <h3>UserMemberships</h3>

      <List>
        {albums.map(e => (
          <List.Item key={e.album_id}>
            <Image size="mini" inline src={e.cover_url} />
            <List.Content>
              <List.Header>{e.title}</List.Header>
              <List.Description>
                {e.description}
              </List.Description>
            </List.Content>
            <Modal 
              trigger={<Button>Remove</Button>}
              header={`Leave ${e.title}?`}
              content="Are you sure? You'll need another invitation to rejoin"
              actions={['Cancel', {key: 'confirm', content: 'Confirm', negative: true, value: 'confirm'}]}
              onActionClick={(event) => { if (event.target.value === 'confirm') removeCollab(e.album_id, e.collaborator_id) }}
            />
          </List.Item>
        ))}
      </List>
      
    </div>
  );

};

export default UserMemberships;
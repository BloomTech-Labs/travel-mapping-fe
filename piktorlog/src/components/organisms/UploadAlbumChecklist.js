import React, { useState, useEffect } from 'react';
import { Form, Header, Segment } from 'semantic-ui-react';

import { getUserAlbums } from '../../store/requests/albums';

const UploadAlbumCheckList = ({ user_id, selectedAlbums, setSelectedAlbums }) => {
  const [availableAlbums, setAvailableAlbums] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await getUserAlbums(user_id);
      console.log('UAC', data);
      setAvailableAlbums(data);
    })();
  }, [user_id]);

  const handleCheck = id => () => {
    if (selectedAlbums.includes(id)) {
      setSelectedAlbums(prev => prev.filter(e => e !== id));
    } else {
      setSelectedAlbums(prev => [...prev, id]);
    }
  };

  return (
    <Segment>
      <Form>
        <Header as='h3' color='teal' textAlign='center'>
          Your Albums
        </Header>
        {availableAlbums.map(e => (
          <Form.Checkbox
            label={e.title}
            checked={selectedAlbums.includes(e.album_id)}
            onChange={handleCheck(e.album_id)}
            key={e.album_id}
          />
        ))}
      </Form>
    </Segment>
  );
};

export default UploadAlbumCheckList;
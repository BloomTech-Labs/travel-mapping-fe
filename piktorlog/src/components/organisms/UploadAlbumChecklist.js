import React, { useState, useEffect } from 'react';
import { Form, Header, Segment, Image, Card, Checkbox } from 'semantic-ui-react';
import styled from 'styled-components';

import { getUserAlbumsReq } from '../../store/requests/albums';

const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ThumbnailCheckbox = styled(Checkbox)`
  width: 100%;
  max-width: 400px;
  text-align: left;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const ThumbnailLabel = styled.label`
  display: flex !important;
  flex-direction: row;
  align-items: center;

  &::before {
    top: 50% !important;
    transform: translateY(-50%);
  }
  &::after {
    top: 50% !important;
    transform: translateY(-50%);
  }

  .ui.card {
    width: 100%;

    .content {
      display: flex;
      flex-direction: row;

      .image {
        object-fit: contain; 
      }

      .album-text {
        margin-left: 2rem;
      }
    }
  }
`;

const UploadAlbumCheckList = ({ user_id, selectedAlbums, setSelectedAlbums }) => {
  const [availableAlbums, setAvailableAlbums] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await getUserAlbumsReq(user_id);
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
      <FormContainer>
        <Header as='h3' color='teal' textAlign='center'>
          Your Albums
        </Header>
        {availableAlbums.map(e => (
          <ThumbnailCheckbox
            label={
              <ThumbnailLabel>
                <Card>
                  <Card.Content>
                    <Image
                      src={e.cover_url}
                      size="tiny"
                      rounded
                    />
                    <div className="album-text">
                      <h4>
                        {e.title.length < 28 ? e.title : e.title.slice(0, 28).trim() + '...'}
                      </h4>
                      <p>
                        {e.description.length < 90 ? e.description : e.description.slice(0, 90).trim() + '...'}
                      </p>
                    </div>
                  </Card.Content>
                </Card>
              </ThumbnailLabel>
              
            }
            checked={selectedAlbums.includes(e.album_id)}
            onChange={handleCheck(e.album_id)}
            key={e.album_id}
          />
        ))}
      </FormContainer>
    </Segment>
  );
};

export default UploadAlbumCheckList;
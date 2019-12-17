import React, { useState, useCallback, useReducer } from 'react';
import { connect } from 'react-redux';
import { v4 as uuid } from 'uuid';

import { Container, Grid, Header, Segment, Button } from 'semantic-ui-react';

import AlbumChecklist from '../components/organisms/UploadAlbumChecklist';
import UploadForm from '../components/molecules/UploadForm';
import Dropzone from '../components/molecules/Dropzone';
import { uploadMedia } from '../store/requests/media';

// I didn't think that this info needed to be in top-level state, so it's here
// it works almost exactly like redux though, nothing magical or complicated
const mediaReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_MEDIA':
      return {
        ...state,
        ...action.payload
      };
    case 'REMOVE_MEDIA':
      const { [action.payload]: removed, ...rest } = state;
      return rest;
    case 'EDIT_MEDIA':
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          ...action.payload.changes
        }
      };
    case 'CLEAR_MEDIA':
      return {};
    default:
      return state;
  }
};

const Upload = ({ currentUser }) => {
  const [selectedAlbums, setSelectedAlbums] = useState([]);

  const [media, dispatch] = useReducer(mediaReducer, {});
  const onDrop = useCallback(acceptedFiles => {
    dispatch({
      type: 'ADD_MEDIA',
      payload: acceptedFiles.reduce((obj, e) => {
        const id = uuid();
        obj[id] = {
          id,
          file: e,
          title: '',
          caption: '',
          keywords: ''
        };
        return obj;
      }, {})
    });
  }, []);

  const submit = async () => {
    const data = await uploadMedia(Object.values(media), selectedAlbums, currentUser.user_id);
    console.log(data);

    dispatch({ type: 'CLEAR_MEDIA' });
    setSelectedAlbums([]);

    // maybe add a confirmation/error message for the user, or redirect to main page from here
  };

  return (
    <Container>
      <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
        <Grid.Column>
          <Header as='h2' color='teal' textAlign='center'>
            Upload Photos
          </Header>
          <Segment.Group>
            <Dropzone onDrop={onDrop} />
            <AlbumChecklist 
              user_id={currentUser.user_id}
              selectedAlbums={selectedAlbums}
              setSelectedAlbums={setSelectedAlbums}
            />
            {!!Object.values(media).length && 
            <Segment>
              <Button color="teal" size="large" onClick={submit}>
                Submit
              </Button>
            </Segment>}
          </Segment.Group>
          {Object.values(media).map(e => (
            <UploadForm
              key={e.id}
              media={e}
              setMedia={(id, changes) => dispatch({
                type: 'EDIT_MEDIA',
                payload: { id, changes }}
              )}
              removeMedia={id => dispatch({
                type: 'REMOVE_MEDIA',
                payload: id
              })}
            />
          ))}
          {!!Object.values(media).length && 
          <Segment>
            <Button color="teal" size="large" onClick={submit}>
              Submit
            </Button>
          </Segment>}
        </Grid.Column>
      </Grid>
    </Container>
  );
};

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  };
};

export default connect(mapStateToProps)(Upload);
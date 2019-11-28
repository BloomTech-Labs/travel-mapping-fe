import React, { useState, useCallback, useEffect, useReducer } from 'react';
import { connect } from 'react-redux';
import { useDropzone } from 'react-dropzone';
import { v4 as uuid } from 'uuid';

import { Container, Grid, Header, Segment } from 'semantic-ui-react';

import AlbumChecklist from '../components/organisms/UploadAlbumChecklist';
import UploadFormList from '../components/organisms/UploadFormList';

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
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

  useEffect(() => {
    console.log(media);
  }, [media]);

  return (
    <Container>
      <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
        <Grid.Column>
          <Header as='h2' color='teal' textAlign='center'>
            Upload Photos
          </Header>
          <Segment.Group>
            <Segment>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                {isDragActive
                    ? <p>Drop the files here ...</p>
                    : <p>Drag 'n' drop some files here, or click to select files</p>}
              </div>
            </Segment>
            <AlbumChecklist 
              user_id={currentUser.user_id}
              selectedAlbums={selectedAlbums}
              setSelectedAlbums={setSelectedAlbums}
            />
          </Segment.Group>
          <UploadFormList
            media={media} 
            setMedia={(id, changes) => dispatch({
              type: 'EDIT_MEDIA',
              payload: { id, changes }}
            )}
            removeMedia={id => dispatch({
              type: 'REMOVE_MEDIA',
              payload: id
            })}
          />
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
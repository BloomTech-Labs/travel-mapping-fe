import React, { useState, useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import { useDropzone } from 'react-dropzone';

import { Container, Grid, Header, Segment, Form } from 'semantic-ui-react';

import { getUserAlbums } from '../store/requests/albums';

const Upload = ({ currentUser }) => {
  const [media, setMedia] = useState([]);
  const [selectedAlbums, setSelectedAlbums] = useState([]);
  const [availableAlbums, setAvailableAlbums] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getUserAlbums(currentUser.user_id);
      console.log(data);
      setAvailableAlbums(data);
    })();
  }, [currentUser]);

  const onDrop = useCallback(acceptedFiles => {
    setMedia(prev => [...prev, ...acceptedFiles.map(e => ({ file: e }))]);
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
            <Segment>
              <Form>
                <Header as='h3' color='teal' textAlign='center'>
                  Your Albums
                </Header>
                {availableAlbums.map(e => (
                  <Form.Checkbox label={e.title} key={e.album_id} />
                ))}
              </Form>
            </Segment>
          </Segment.Group>
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
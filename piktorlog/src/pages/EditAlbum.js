import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Container, Grid } from 'semantic-ui-react';

import CreateAlbumForm from '../components/molecules/CreateAlbumForm';
import { editAlbumReq, getUserAlbumsReq } from '../store/requests/albums';


const EditAlbum = ({ currentUser, match }) => {
  const [album, setAlbum] = useState({});
  useEffect(() => {
    (async () => {
      const data = await getUserAlbumsReq(currentUser.user_id);
      const thisAlbum = data.filter(e => e.album_id === Number(match.params.id))[0];
      console.log('EDIT ALBUM', thisAlbum);
      setAlbum(thisAlbum);
    })();
  }, [currentUser.user_id, match]);

  const submitEdit = () => {

  };

  return (
    <Container>
      <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
        <Grid.Column>
          <CreateAlbumForm 
            createAlbum={submitEdit}
            user_id={currentUser.user_id}
            album={album}
            editing
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

export default connect(mapStateToProps)(EditAlbum);
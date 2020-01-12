import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Container, Grid } from 'semantic-ui-react';

import UploadForm from '../components/molecules/UploadForm';
import { editMediaReq } from '../store/requests/media';


const EditMedia = ({ currentUser, match }) => {
  const [redirect, setRedirect] = useState(false);
  const [media, setMedia] = useState(null);


//   useEffect(() => {
//     (async () => {
//       // this really isn't ideal. We should have a way of passing in the album data as a prop,
//       // or creating a route on the server to request data on a single, specific album.
//       const data = await getMediaReq(currentUser.user_id);
//       const neededAlbum = data.filter(e => e.album_id === Number(match.params.id))[0];
//       setAlbum(neededAlbum);
//     })();
//   }, [currentUser.user_id, match]);


  if (redirect) {
    return <Redirect to="/" />
  }

  return (
    <Container>
      <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
        <Grid.Column>
          {/* <CreateAlbumForm 
            createAlbum={submitEdit}
            user_id={currentUser.user_id}
            album={album}
            editing
          /> */}
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

export default connect(mapStateToProps)(EditMedia);
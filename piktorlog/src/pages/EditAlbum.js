import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Container, Grid } from 'semantic-ui-react';

import CreateAlbumForm from '../components/molecules/CreateAlbumForm';
import { editAlbumReq, getUserAlbumsReq, addAlbumMetaReq } from '../store/requests/albums';


const EditAlbum = ({ currentUser, match }) => {
  const [album, setAlbum] = useState(null);
  useEffect(() => {
    (async () => {
      // this really isn't ideal. We should have a way of passing in the album data as a prop,
      // or creating a route on the server to request data on a single, specific album.
      const data = await getUserAlbumsReq(currentUser.user_id);
      const neededAlbum = data.filter(e => e.album_id === Number(match.params.id))[0];
      setAlbum(neededAlbum);
    })();
  }, [currentUser.user_id, match]);

  const submitEdit = async (user_id, title, description, access, metadata) => {
    let detailEdit = null, metaEdit = null;

    if (album.title !== title || album.description !== description || album.access !== access) {

      // let changes = {};
      // if (album.title !== title) changes.title = title;
      // if (album.description !== description) changes.description = description;
      // if (album.access !== access) changes.access = access;

      // this is sort of broken at the moment, and will return a 400 if a request is sent to change
      // descripton or access, without also changing title
      // Nothing I can do about it on this end, will make any needed fixes here once I can.
      detailEdit = editAlbumReq(album.album_id, { title, description, access });
    }

    const metaDiff = metadata.filter(e => !(album.meta[e.name] === e.value));
    if (metaDiff.length) {
      metaEdit = addAlbumMetaReq(album.album_id, metaDiff);
    }
    
    Promise.all([detailEdit, metaEdit])
      .then(res => {
        console.log('edit results:', res);
        // do some redirection stuff from here?
      })
      .catch(err => {
        console.log({ ...err });
      });
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
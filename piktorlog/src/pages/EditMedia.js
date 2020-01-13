import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Container, Grid, Segment, Button } from 'semantic-ui-react';

import UploadForm from '../components/molecules/UploadForm';
import { editMediaReq } from '../store/requests/media';


const EditMedia = (props) => {
  const [redirect, setRedirect] = useState(false);
  const [mediaItem, setMediaItem] = useState(props.location.state.mediaItem); //state passed in in props from the edit button link on each image; see MediaCard component
  console.log(mediaItem);

  // NOTE: Everything below is very rough. Keep what makes sense to you and move on from there. 
  const submit = async () => {
    const data = await editMediaReq(Object.values(mediaItem), mediaItem, props.currentUser.user_id);
    console.log(data);

    // dispatch({ type: 'CLEAR_MEDIA' });
    // setSelectedAlbums([]);

    // maybe add a confirmation/error message for the user, or redirect to main page from here
  };

//   useEffect(() => {
//     (async () => {
//       // this really isn't ideal. We should have a way of passing in the album data as a prop,
//       // or creating a route on the server to request data on a single, specific album.
//       const data = await getMediaReq(currentUser.user_id);
//       const neededAlbum = data.filter(e => e.album_id === Number(match.params.id))[0];
//       setAlbum(neededAlbum);
//     })();
//   }, [currentUser.user_id, match]);

  // useEffect(()=> {
  //   console.log(props.location.state)
  // }, [props.currentUser.user_id])

  // if (redirect) {
  //   return <Redirect to="/" />
  // }
  
  
  return (
    <Container>
      <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
        <Grid.Column>
        {/* {Object.values(mediaItem).map(e => (
            // <UploadForm
            //   key={e.id}
            //   mediaItem={e}
            //   // setMedia={(id, changes) => dispatch({
            //   //   type: 'EDIT_MEDIA',
            //   //   payload: { id, changes }}
            //   // )}
            //   // removeMedia={id => dispatch({
            //   //   type: 'REMOVE_MEDIA',
            //   //   payload: id
            //   // })}
            //   media = {{file:'beep'}}
            // />
            e
          ))} */}

          {Object.values(mediaItem).length > 3 && 
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

export default connect(mapStateToProps)(EditMedia);
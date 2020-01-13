import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Container, Grid, Segment, Button, Form, Image } from 'semantic-ui-react';

import UploadMeta from '../components/molecules/UploadMeta';

import { useGetMediaOnRequest, useEditMedia } from '../store/hooks/useFetchOnRequest';
import { useLogOnChange } from '../store/hooks/misc';

// const EditMedia = ({ location, match }) => {
const EditMedia = (props) => {

  // figure out if media is provided from link props;
  const [mediaProps] = useState(
    props.location && props.location.state && props.location.state.mediaItem 
    ? { 
      ...props.location.state.mediaItem,
      // I hate this so much, but the api and the link props deliver meta in different shapes
      // and this really is the lesser evil until it can be standardized.
      meta: Object.entries(props.location.state.mediaItem.meta).map(e => ({ name: e[0], value: e[1] }))
    } 
    : null
  );
  
  const [getMedia, mediaItem] = useGetMediaOnRequest(null, null, mediaProps);
  useLogOnChange('mediaItem', mediaItem);

  const [changes, setChanges] = useState({});
  useLogOnChange('changes', changes);

  // if media was not provided through link props, go get it from the server
  useEffect(() => {
    if (!mediaProps) {
      getMedia(props.match.params.media_id);
    }
  }, [mediaProps, props.match.params.media_id, getMedia]);

  const handleChange = (e, { name, value }) => {
    setChanges(prev => ({ ...prev, [name]: value }));
  };
  console.log('props: ', props)
  // useEffect(()=> {
  //   props.handleRedirectToUploadMedia();

  //   return () => {
  //     console.log('unmounting')
  //     props.handleRedirectToCreateAlbum();
  //   }
  // }, [])

  const handleAddMeta = (name, value) => {
    // if there haven't yet been any changes to meta, initialize it
    if (!changes.meta) setChanges(prev => ({ ...prev, meta: [...mediaItem.meta] }));

    setChanges(prev => ({
      ...prev, 
      meta: [
        ...prev.meta, 
        { name, value }
      ] 
    }));
  };

  const handleRemoveMeta = (delName, delValue) => {
    // if there haven't yet been any changes to meta, initialize it
    if (!changes.meta) setChanges(prev => ({ ...prev, meta: [...mediaItem.meta] }));

    setChanges(prev => ({
      ...prev, 
      meta: prev.meta.filter(e => !(e.name === delName && e.value === delValue)) 
    }));
  };

  const handleClearChanges = () => {
    setChanges({});
  }

  // figure out if linked from an album
  const [albumProps] = useState(props.location && props.location.state && props.location.state.albumData ? props.location.state.albumData : null);
  useLogOnChange('albumProps', albumProps);

  // redirect after the edit request returns. Either to the home page, or the album the user came from
  const history = useHistory();
  const [editMedia] = useEditMedia(() => history.push(albumProps ? `/albums/${albumProps.album_id}` : '/'));

  const handleSubmit = () => {
    // keywords needs to be turned into an array for the api
    let formattedChanges = { ...changes };
    if (formattedChanges.keywords) {

      formattedChanges.keywords = formattedChanges.keywords.split(',').reduce((acc, e) => {
        e.trim();
        console.log(e)
        if (e.length) acc.push(e);
        return acc;
      }, []);

    }
    editMedia(mediaItem.media_id, formattedChanges);
  };
  
  return (
    
    <Container>
      {mediaItem &&
      <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
        <Grid.Column>
          <Segment>
            <Grid>

              <Grid.Column width="6">
                <Image src={mediaItem.media_url} rounded />
              </Grid.Column>

              <Grid.Column width="10">
                <Form>

                  {/* title cannot be changed right now, therefore no need for an input here */}
                  <h2>{mediaItem.title}</h2>

                  <Form.Input
                    fluid
                    name="caption"
                    placeholder="caption"
                    value={changes.caption || mediaItem.caption}
                    onChange={handleChange}
                  />

                  <Form.Input
                    fluid
                    name="keywords"
                    placeholder="keywords (comma-separated, e.g. one, two, three)"
                    value={changes.keywords || mediaItem.keywords.join(', ')}
                    onChange={handleChange}
                  />

                  <UploadMeta 
                    meta={changes.meta || mediaItem.meta}
                    addMeta={handleAddMeta}
                    removeMeta={handleRemoveMeta}
                  />

                </Form>

                <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '1rem' }}>

                  <Button 
                    onClick={handleClearChanges}
                    negative
                  >
                    Revert
                  </Button>

                  <Button
                    onClick={handleSubmit}
                    positive
                  >
                    Submit
                  </Button>

                </div>
              </Grid.Column>

            </Grid>
          </Segment>
        </Grid.Column>
      </Grid>}
    </Container>
  );
};

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  };
};

export default connect(mapStateToProps)(EditMedia);
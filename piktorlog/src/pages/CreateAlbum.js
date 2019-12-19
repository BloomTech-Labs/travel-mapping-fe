import React from 'react';
import { connect } from 'react-redux';
import { Container, Grid } from 'semantic-ui-react';

import { createAlbum } from '../store/actions/albums.js';
import CreateAlbumForm from '../components/molecules/CreateAlbumForm';


const CreateAlbum = (props) => {

    return (
        <Container>
            <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <CreateAlbumForm 
                        createAlbum = {props.createAlbum} 
                        user_id = {props.state.currentUser.user_id}
                    />
                </Grid.Column>
            </Grid>
        </Container>
    )
};

const mapStateToProps = state => {
    return {
      state:state
    }
  }

export default connect(mapStateToProps, {createAlbum})(CreateAlbum);
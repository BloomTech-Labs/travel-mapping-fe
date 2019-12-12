import React from 'react';
import { connect } from 'react-redux';

import { Button, Card, Divider } from 'semantic-ui-react';

import MediaCardList from '../components/organisms/MediaCardList';


/**
 * The AlbumOverview need to receive all of the album information. It can query for the images as it is loading
 * album = {
 *   title: "",
 *   description: "",
 *   dateCreated: "",
 *   lastUpdated: "",
 *   coverImageURL: "",
 *   albumMeta: ["meta1", "meta2", "meta3", "etc..."],
 * }
 */

const AlbumOverview = (props) => {

  return (
    <React.Fragment>
      <Card.Group centered stackable doubling>
        <Card raised fluid>
          <Card.Content>
            <Button floated='right' icon='ellipsis vertical' />
            <Card.Header>{props.album.title}</Card.Header>
            <Card.Meta>Date Created: {props.album.created_at}</Card.Meta>
            <Card.Meta>Last Updated: {props.album.updated_at}</Card.Meta>
            <Divider horizontal>Album Description</Divider>
            <Card.Description>{props.album.description}</Card.Description>
          </Card.Content>
        </Card>


        <MediaCardList albumMedia={props.albumMedia} />

      </Card.Group>
    </React.Fragment>
  );
};


const mapStateToProps = state => {
  return {
    state:state
  }
}

export default connect(mapStateToProps, {})(AlbumOverview);

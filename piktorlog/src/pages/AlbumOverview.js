import React from 'react';
import { Button, Card, Divider } from 'semantic-ui-react';

import { getAlbum } from '../store/mockData.js';
import ImageCardList from '../components/organisms/ImageCardList';

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

const AlbumOverview = (/* { album } */) => {
  // temporary variable. once prop is being received delete variable and uncomment prop.
  const { album } = getAlbum(0);
  console.log(album);

  return (
    <React.Fragment>
      <Card.Group centered>
        <Card raised fluid>
          <Card.Content>
            <Button floated='right' icon='ellipsis vertical' />
            <Card.Header>{album.title}</Card.Header>
            <Card.Meta>Date Created: {album.created_at}</Card.Meta>
            <Card.Meta>Last Updated: {album.updated_at}</Card.Meta>
            <Divider horizontal>Album Description</Divider>
            <Card.Description>{album.description}</Card.Description>
          </Card.Content>
        </Card>
        <ImageCardList />
      </Card.Group>
    </React.Fragment>
  );
};

export default AlbumOverview;

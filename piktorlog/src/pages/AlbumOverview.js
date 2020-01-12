import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';

import { Button, Card, Divider, Container } from 'semantic-ui-react';

import MediaCard from '../components/molecules/MediaCard';
import {getAlbumMediaReq} from '../store/requests/media';
import {getUserAlbumsReq} from '../store/requests/albums';
import {getLocalDateAndTime} from '../store/utils.js';





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
  
  const [availableAlbums, setAvailableAlbums] = useState([]);
  const [albumData, setAlbumData] = useState({});
  const [albumMedia, setAlbumMedia] = useState([]);

  useEffect(() => {
    (async () => {
      // instead of requesting all user albums from backend, use endpoint 
      // to get single album here
      const data = await getUserAlbumsReq(props.state.currentUser.user_id);
      console.log('UAC', data);
      setAvailableAlbums(data);
      for (let i = 0; i < data.length; i++) {
        if (data[i].album_id === Number(props.match.params.id)) {
          setAlbumData(data[i]);
        }
      }
    })();
  }, [props.state.currentUser.user_id]);

  useEffect(() => {
    // console.log('albumData: ', albumData)
  }, [albumData]);

  useEffect(() => {
    (async () => {
      // console.log('albumData.album_id: ', albumData.album_id)
      const data = await getAlbumMediaReq(albumData.album_id);
      // console.log('AlbumMedia Data: ', data)
      setAlbumMedia(data.data);
      
    })();
  }, [albumData]);

  useEffect(() => {
    // console.log('albumMedia: ', albumMedia)
  }, [albumMedia]);



  return (
    <React.Fragment>
        <Card.Group centered stackable doubling>
          <Card raised fluid>
            <Card.Content>
              <Button floated='right' icon='ellipsis vertical' />
              <Card.Header>{albumData.title}</Card.Header>
              <Card.Meta>Date Created: {getLocalDateAndTime(albumData.created_at)}</Card.Meta>
              <Card.Meta>Last Updated: {getLocalDateAndTime(albumData.updated_at)}</Card.Meta>
              <Divider horizontal>Album Description</Divider>
              <Card.Description>{albumData.description}</Card.Description>
            </Card.Content>
          </Card>
        </Card.Group>
        
        <Card.Group centered stackable doubling>
            {albumMedia.map((albumMediaItem, index) => (
                <MediaCard key={index} mediaItem={albumMediaItem}/>
            ))}
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
